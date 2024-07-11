import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  /**
   * Retourne l'objet `view` et applique dessus
   * la méthode `render` avec pour argument
   * le chemin vers la vue `pages/auth/register`
   */
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }
  /**
   * Méthode `store` qui est appelée lorsque l'utilisateur
   * soumet un formulaire de création de compte.
   * Pour cela, on récupère les données de la requête,
   * on crée un utilisateur avec ces données, on
   * connecte l'utilisateur avec le provider `web`
   * et on redirige vers la page d'accueil.
   *
   * Un `provider` est un objet qui permet de
   * gérer les sessions d'un utilisateur. Dans notre
   * cas, nous utilisons le provider `web` qui
   * permet de gérer les sessions des utilisateurs
   * connectés via le navigateur. C'est différent
   * d'une connexion via un API par exemple.
   */
  async store({ request, response, auth }: HttpContext) {
    const data = await request.only(['fullName', 'email', 'password'])
    const user = await User.create(data)
    await auth.use('web').login(user)
    return response.redirect().toRoute('home')
  }
}
