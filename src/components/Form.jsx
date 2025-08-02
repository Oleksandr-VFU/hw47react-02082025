import React from 'react'
import { useFormik } from 'formik'
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

const Form = () => {
    const formik = useFormik({
        initialValues: {phone: '', email: '', password: '', confirmPassword: ''},
        validationSchema: RegistrationSchema,
        onSubmit: (values) => {console.log('Submitted: ', values)}
    });

  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="phone-input">Телефон:</label>
            <input
                id="phone-input"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
                <div style={{color: 'red'}}>{formik.errors.phone}</div>
            )}
        </div>

        <div>
            <label htmlFor="email-input">Email:</label>
            <input
                id="email-input"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
                <div style={{color: 'red'}}>{formik.errors.email}</div>
            )}
        </div>

        <div>
            <label htmlFor="paswd-input">Пароль:</label>
            <input
                id="paswd-input"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
                <div style={{color: 'red'}}>{formik.errors.password}</div>
            )}
        </div>

        <div>
            <label htmlFor="confirmPaswd-input">Підтвердження Пароля:</label>
            <input
                id="confirmPaswd-input"
                name="confirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>
            )}
        </div>

        <button type="submit">Відправити</button>
        
    </form>
  )
}

export default Form