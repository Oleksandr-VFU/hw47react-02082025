import * as Yup from 'yup'

const RegistrationSchema = Yup.object({
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
    .oneOf([Yup.ref('password'), null], 'Паролі не співпадають')
    .required('Підтвердіть пароль')
});

export default RegistrationSchema;
