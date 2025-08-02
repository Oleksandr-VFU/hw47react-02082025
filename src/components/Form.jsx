import React, { useState } from 'react'
import { useFormik } from 'formik'
import RegistrationSchema from './validations'
import styles from './Form.module.css'

const Form = () => {
    const [formData, setFormData] = useState(null)
    const formik = useFormik({
        initialValues: {phone: '', email: '', password: '', confirmPassword: ''},
        validationSchema: RegistrationSchema,
        onSubmit: (values) => {
            console.log('Submitted: ', values);
            setFormData(values)
        }
    });

  return (
    <div className={styles.container}>
        {formData && <h4 className={styles.title}>Валідовано користувача: {formData?.email}</h4>}
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="phone-input" className={styles.label}>Телефон:</label>
                <input
                    id="phone-input"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <div className={styles.error}>{formik.errors.phone}</div>
                )}
            </div>

            <div className={styles.field}>
                <label htmlFor="email-input" className={styles.label}>Email:</label>
                <input
                    id="email-input"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className={styles.error}>{formik.errors.email}</div>
                )}
            </div>

            <div className={styles.field}>
                <label htmlFor="paswd-input" className={styles.label}>Пароль:</label>
                <input
                    id="paswd-input"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className={styles.error}>{formik.errors.password}</div>
                )}
            </div>

            <div className={styles.field}>
                <label htmlFor="confirmPaswd-input" className={styles.label}>Підтвердження Пароля:</label>
                <input
                    id="confirmPaswd-input"
                    name="confirmPassword"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div className={styles.error}>{formik.errors.confirmPassword}</div>
                )}
            </div>

            <button type="submit" className={styles.button}>Відправити</button>
            
        </form>
    </div>

  )
}

export default Form