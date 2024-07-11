import type { HttpContext } from '@adonisjs/core/http'

export default class LogoutController {
  /**
   * Attend que l'utilisateur se déconnecte,
   * en passant par le provider `web` et en
   * appliquant la méthode `logout` sur lui.
   *
   * Ensuite, on redirige vers la page d'accueil.
   */
  async getOut({ response, auth }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('home')
  }
}
