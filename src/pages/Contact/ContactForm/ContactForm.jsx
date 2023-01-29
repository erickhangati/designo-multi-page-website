import React, { useEffect, useState, useRef } from "react";

import { Form, useActionData, useNavigate } from "react-router-dom";

import ErrorIcon from "./ErrorIcon";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  // REFs FOR INPUT VALUES
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const messageInput = useRef();

  // ERRORS STATES
  const initialErrorStates = {
    name: false,
    email: false,
    phone: false,
    message: false,
  };

  const [errorStates, setErrorStates] = useState(initialErrorStates);

  // GET FORM DATA
  const formData = useActionData();

  // IF MESSAGE SUBMITTED SUCCESFULLY
  const navigate = useNavigate();
  if (formData && formData.success) {
    // CLEAR FORM INPUTS
    nameInput.current.value = "";
    emailInput.current.value = "";
    phoneInput.current.value = "";
    messageInput.current.value = "";

    // SCROLL UP
    window.scrollTo(0, 0);

    // REDIRECT TO HOME PAGE
    setTimeout(() => navigate("/"), 3000);
  }

  // UPDATE ERROR STATES ON SUBMISSION
  useEffect(() => {
    if (formData && formData.nameError)
      setErrorStates({ ...initialErrorStates, name: true });

    if (formData && formData.emailError)
      setErrorStates({ ...initialErrorStates, email: true });

    if (formData && formData.phoneError)
      setErrorStates({ ...initialErrorStates, phone: true });

    if (formData && formData.messageError)
      setErrorStates({ ...initialErrorStates, message: true });
  }, [formData]);

  // UPDATE ERROR STATES ON INPUT CHANGE
  const inputChangeHandler = () => setErrorStates(initialErrorStates);

  return (
    <div className={styles["contact-form"]}>
      {/* SUCCESS MESSAGE */}
      {formData && formData.success && (
        <div className={styles["contact-form__success"]}>
          {formData.success}
        </div>
      )}

      {/* CONTACT FORM */}
      <Form method="post" action="/contact">
        <div className={styles["form-control"]}>
          {/* NAME INPUT */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={inputChangeHandler}
            ref={nameInput}
          />

          {/* ERROR MESSAGE */}
          {errorStates.name && formData && formData.nameError && (
            <div className={styles["form-control__error"]}>
              <span>{formData.nameError}</span>
              <ErrorIcon />
            </div>
          )}
        </div>

        <div className={styles["form-control"]}>
          {/* EMAIL INPUT */}
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={inputChangeHandler}
            ref={emailInput}
          />

          {/* ERROR MESSAGE */}
          {errorStates.email && formData && formData.emailError && (
            <div className={styles["form-control__error"]}>
              <span>{formData.emailError}</span>
              <ErrorIcon />
            </div>
          )}
        </div>

        <div className={styles["form-control"]}>
          {/* PHONE INPUT */}
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            onChange={inputChangeHandler}
            ref={phoneInput}
          />

          {/* ERROR MESSAGE */}
          {errorStates.phone && formData && formData.phoneError && (
            <div className={styles["form-control__error"]}>
              <span>{formData.phoneError}</span>
              <ErrorIcon />
            </div>
          )}
        </div>

        <div className={styles["form-control"]}>
          {/* MESSAGE INPUT */}
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            onChange={inputChangeHandler}
            ref={messageInput}
          />

          {/* ERROR MESSAGE */}
          {errorStates.message && formData && formData.messageError && (
            <div
              className={`${styles["form-control__error"]} ${styles.message}`}
            >
              <span>{formData.messageError}</span>
              <ErrorIcon />
            </div>
          )}
        </div>

        <button>Submit</button>
      </Form>
    </div>
  );
};

export default ContactForm;

export const action = async ({ request }) => {
  const formData = await request.formData();

  // EXTRACT FORM DATA SUBMITTED
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  // EMAIL VALIDATION
  const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    data.email
  );

  // FORM INPUT VALIDATIONS
  if (data.name.length === 0) {
    return { nameError: "Can't be empty" };
  }

  if (data.email.length === 0) {
    return { emailError: "Can't be empty" };
  }

  if (!emailIsValid) {
    return { emailError: "Invalid email format" };
  }

  if (data.phone.length === 0) {
    return { phoneError: "Can't be empty" };
  }

  if (data.message.length === 0) {
    return { messageError: "Can't be empty" };
  }

  // DO SOMETHING WITH THE DATA LIKE SAVING ON THE SERVER
  // ......

  // RETURN SUCCESS MESSAGE

  return { success: "Message sent successfully!" };
};
