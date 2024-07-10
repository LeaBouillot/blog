/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.group(() =>  {

//Registration
router.get('/register', [RegisterController, 'show']).as('resister.show')
router.post('/register', [RegisterController, 'store']).as('resister.store')

//Login
router.get('/login', [LoginController, 'show']).as('login.show')
router.post('/login', [LoginController, 'store']).as('login.store')

//Logout
router.get('/logout', [LogoutController, 'getOut']).as('logout')
}).as('auth')
