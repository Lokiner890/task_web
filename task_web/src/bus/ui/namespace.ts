export namespace Ui {
  export type FormName = 'sign_in' | 'sign_up';

  export type Loader = {
    name: FormName;
    loading: boolean;
  };

  export type Success = {
    name: FormName;
    message: string;
  };
}
