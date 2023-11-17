
export interface RegisterForm{
    username:string;
    email:string;
    password:string;
    roles:string[];
}


export interface LoginForm {
    username:string;
    password:string;
    remember?:boolean;
}