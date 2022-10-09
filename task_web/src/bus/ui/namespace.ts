export namespace Ui {
  export type FormName = 'auth' | 'logout' | 'user' | 'project' | 'team';

  export type Loader = {
    name: FormName;
    loading: boolean;
  };

  export type Success = {
    name: FormName;
    message: string;
  };
}
