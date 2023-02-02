export const validationUsurname = RegExp(/^[a-zA-Z0-9\_\-]{4,16}$/);
export const validationEmail = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
export const validationPassword = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$/);