import React from 'react'
import { useFormik } from 'formik'

const Form = () => {
    const formik = useFormik({
        initialValues: {phone: '', email: '', password: '', confirmPassword: ''},
        onSubmit: (values) => {console.log('Submitted: ', values)}
    });
    
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
           <label htmlFor="phone-input">Телефон:</label>
           <input
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
           />
        </div>
        
    </form>
  )
}

export default Form