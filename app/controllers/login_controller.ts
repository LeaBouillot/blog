import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  /**
   * Retourne l'objet `view` et applique dessus
   * la méthode `render` avec pour argument
   * le chemin vers la vue `pages/auth/login`
   */

  async show({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async store({}: HttpContext) {}
}
