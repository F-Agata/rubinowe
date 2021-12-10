import React, {useState, useEffect } from 'react'


const useForm = (validationRules) => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        message: '',
        accept: false,
    })

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const {type, name, value, checked} = e.target

        if (type === "text" || type === "email" || type ==='textarea') {
            setValues({
                ...values,
                [name]: value,
            })
        } else if (type === "checkbox") {
            setValues({
                ...values,
                [name]: checked,
            })
        }

    }

    const handleSubmit = e => {
        e. preventDefault()
        setErrors(validationRules(values))

    }

    return {values, errors, handleChange, handleSubmit}
}

export default useForm