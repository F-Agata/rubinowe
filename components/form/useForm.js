import React, { useState, useEffect } from "react";

const useForm = (validationRules, submittedForm) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    message: "",
    accept: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;

    if (type === "text" || type === "email" || type === "textarea") {
      setValues({
        ...values,
        [name]: value,
      });
    } else if (type === "checkbox") {
      setValues({
        ...values,
        [name]: checked,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validationRules(values));
    setIsSubmitting(true)
  };

  useEffect(
      () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          submittedForm();
          setValues({
            username: '',
            email: '',
            message: '',
            agreement: false,
          })
          setIsSubmitting(false)
        }
      }
  )

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
