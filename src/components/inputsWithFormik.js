import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const passwordRegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
console.log(passwordRegExp)
const errorMensage = {
    required: 'Este campo é obrigatório',
    number: 'Deve ter apenas números',
    password: 'A senha deve ter no minímo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial',
    email: 'Este email é inválido',
    positive: 'O número não deve ser negativo',
    integer: 'O número deve ser inteiro'
}

const validationSchema = yup.object({
    name: yup.string().required(errorMensage.required),
    password: yup.string().matches(passwordRegExp, errorMensage.password).required(errorMensage.required),
    email: yup.string().email(errorMensage.email).required(errorMensage.required),
    phone: yup.number().typeError(errorMensage.number).required(errorMensage.required),
    age: yup.number().typeError(errorMensage.number).positive(errorMensage.positive).integer(errorMensage.integer).required(errorMensage.required),
})

export default function Inputs() {
    return (
        <Formik
            initialValues={{
                name: '',
                password: '',
                email: '',
                phone: '',
                birth: ''
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                <form className="register-panel" autoComplete="off" onSubmit={handleSubmit} >
                    <input
                        autoComplete="nope"
                        placeholder="Nome"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.name}
                        className={touched.name && errors.name ? 'errorInput' : 'confirmInput'}
                    />

                    {touched.name && errors.name ?
                        <div id="errorField">{errors.name}</div>
                        : touched.name
                            ? <div id="hiddenErrorField">{errors.name}</div>
                            : null}

                    <input
                        placeholder="Senha"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.password}
                        className={touched.password && errors.password ? 'errorInput' : 'confirmInput'}
                    />

                    {touched.password && errors.password ?
                        <div id="errorField">{errors.password}</div>
                        : touched.password
                            ? <div id="hiddenErrorField">{errors.password}</div>
                            : null}

                    <input
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.email}
                        className={touched.email && errors.email ? 'errorInput' : 'confirmInput'}
                    />

                    {touched.email && errors.email ?
                        <div id="errorField">{errors.email}</div>
                        : touched.email
                            ? <div id="hiddenErrorField">{errors.email}</div>
                            : null}

                    <input
                        placeholder="Celular"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.phone}
                        className={touched.phone && errors.phone ? 'errorInput' : 'confirmInput'}
                    />

                    {touched.phone && errors.phone ?
                        <div id="errorField">{errors.phone}</div>
                        : touched.phone
                            ? <div id="hiddenErrorField">{errors.phone}</div>
                            : null}

                    <input
                        placeholder="Idade"
                        name="age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values.age}
                        className={touched.age && errors.age ? 'errorInput' : 'confirmInput'}
                    />

                    {touched.age && errors.age ?
                        <div id="errorField">{errors.age}</div>
                        : touched.age
                            ? <div id="hiddenErrorField">{errors.age}</div>
                            : null}

                    <button type="submit">Register</button>
                </form>
            )}
        </Formik>
    )
}