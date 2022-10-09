export namespace Auth {
  export type ReqSignIn = {
    email: string;
    password: string;
  };
  export type ResSignIn = {};

  export type ReqSignUp = {
    email: string;
    phone: string;
    fullName: string;
    password: string;
  };
  export type ResSignUp = {};
}
