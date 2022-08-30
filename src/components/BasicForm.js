import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFirstname,
    isValid: enteredFirstnameIsValid,
    hasError: firstnameHasError,
    valueChangeHandler: firstnameChangdeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastname,
    isValid: enteredLastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangdeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (
    enteredFirstnameIsValid &&
    enteredLastnameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    // reset form
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  const firstnameInputClasses = firstnameHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameInputClasses = lastnameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstnameChangdeHandler}
            onBlur={firstnameBlurHandler}
            value={enteredFirstname}
          />
          {firstnameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastnameChangdeHandler}
            onBlur={lastnameBlurHandler}
            value={enteredLastname}
          />
          {lastnameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">
            Email must not be empty and includes "@".
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
