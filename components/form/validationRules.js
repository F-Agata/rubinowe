const validationRules = (values) => {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "podaj imię";
  }

  if (!values.email.trim()) {
    errors.email = "podaj email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email zawiera nieprawidłowe znaki i/lub nie zawiera @";
  }

  if (!values.message.trim()) {
    errors.message = "wpisz treść";
  } else if (values.message.length < 6) {
    errors.message = "treść jest zbyt krótka";
  }

  if (values.accept === false) {
    errors.accept = "nie wyraziłeś zgody na kontakt emailowy";
  }

  return errors;
};

export default validationRules;
