export namespace App {
  export type BaseAction<T, P = {}> = {
    type: T;
    payload: P;
  };

  export type Image = {
    url: string;
  };

  export type MenuItems = 'Home' | 'Profile' | 'Settings' | 'Team' | 'Projects';
}
