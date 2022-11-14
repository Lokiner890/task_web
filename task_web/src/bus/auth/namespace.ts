export namespace Auth {
  export type ReqSignIn = {email: string; password: string};
  export type ResSignIn = {};

  export type ReqSignUp = {
    email: string;
    password: string;
    username: string;
  };
  export type ResSignUp = {};
}
