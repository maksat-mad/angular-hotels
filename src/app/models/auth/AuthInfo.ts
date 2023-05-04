export interface LoginInfo {
  email: string;
  password: string;
}

export interface SignUpInfo {
  firstname: string;
  lastname: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
}

export interface ChangePassword {
  email: string,
  password: string
}
