import * as Yup from 'yup'

export interface RegistrationFormValues {
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationSchema: Yup.ObjectSchema<RegistrationFormValues> = Yup.object({
  phone: Yup.string()
    .matches(/^\d{10,14}$/, 'Невірний формат номеру телефону')
    .required('Обовʼязкове поле'),
  email: Yup.string()
    .email('Невірний email')
    .required('Обовʼязкове поле'),
  password: Yup.string()
    .min(6, 'Мінімум 6 символів')
    .required('Обовʼязкове поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Паролі не співпадають')
    .required('Підтвердіть пароль')
});

export default RegistrationSchema;
