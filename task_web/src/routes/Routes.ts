export enum Routes {
  HOME_ROUTER = '/*',
  AUTH_ROUTER = '/auth/*',
  PROJECT_ROUTER = '/projects/*',
  TEAM_ROUTER = '/teams/*',

  //PROJECT
  PROJECT_LIST = '/',
  PROJECT_DETAIL = '/:id',
  PROJECT_FORM = 'form/:type',

  //AUTH
  SIGN_IN = 'signIn',
  SIGN_UP = 'signUp',

  //HOME
  HOME = '/',
  PROFILE = 'profile',
  SETTINGS = 'settings',
  USERS = 'users',

  //TEAM
  TEAM_LIST = '/',
  TEAM_DETAIL = '/:id',
  TEAM_CURRENT = '/current',

  //NAVIGATE
  //AUTH
  TO_SIGN_IN = '/auth/signIn',
  TO_SIGN_UP = '/auth/signUp',
  //HOME
  TO_HOME = '/',
  TO_PROFILE = '/profile',
  TO_SETTINGS = '/settings',
  TO_USERS = '/users',
  //PROJECT
  TO_PROJECT_LIST = '/projects',
  TO_PROJECT_CREATE = '/projects/form/create',
  TO_PROJECT_UPDATE = '/projects/form/update',
  TO_PROJECT_DETAIL = '/projects/',
  //TEAM
  TO_TEAM_LIST = '/teams',
  TO_TEAM_DETAIL = '/teams/',
  TO_TEAM_CURRENT = '/teams/current',
}
