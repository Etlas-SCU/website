import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import styles from "./sign_reg.module.css";
import sign from "../../../../images/Pics/signin.png";
import fac from "../../../../images/Pngs/Groupfac.png";
import apple from "../../../../images/Pngs/Groupapple.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Typography } from "@mui/material";
import { Context } from "../../../Context/Context";
import GoogleSignIn from "../../google-signin/GoogleSignIn";
import { Login } from "../../../../repositories/authRepo";
import MPopUp from "../../../PopUp_Message/error/MPopUp";

export default function SignIn() {
  const { t } = useTranslation();
  const { setButtonPopup, setMassagePopup, LogIn, setLogIn } =
    useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [popup,setPopup]=useState(null)

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email(t("nav.emailformat")).required(t("nav.required")),
    password: Yup.string()
      .required(t("nav.required"))
      .min(8, t("nav.passwordShort"))
      .matches(/[a-zA-Z]/, t("nav.passwordLetters")),
  });

  function handleLogin(jsonBody) {
    Login(jsonBody).then((result) => {
      if (!result.isError) {
        setLogIn(true);
        setMassagePopup(true);
        setTimeout(() => {
          setButtonPopup([false, ""]);
        }, 2000);
        setPopup(<MPopUp type="done">you are Login successfully</MPopUp>)
      } else {
        setMassagePopup(true);
        setIsLoading(false);
        setPopup(<MPopUp type="error">{result.body.detail}</MPopUp>) 
      }
    });
  }

  const onSubmit = (values, { resetForm }) => {
    var jsonBody = {
      email: values.email,
      password: values.password,
    };
    localStorage.removeItem("access");
    setIsLoading(true);
    handleLogin(jsonBody);
    setTimeout(() => {
      resetForm({ values: initialValues });
    }, 2000);
  };
  return (
    <>
      {popup}

      <img className={styles.popup__img} src={sign} alt="formImg" />
      <Stack
        sx={{
          m: "80px 0 0 20px ",
        }}
        className={styles.form}
      >
        <Box>
          <Typography fontWeight="800"> {t("nav.signin")}</Typography>
          <Typography fontSize="11px">{t("nav.signInPopup.note1")}</Typography>
        </Box>

        <Box>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Stack direction="column">
                <label htmlFor="email">{t("nav.email")}</label>
                <Field
                  type="email"
                  placeholder={t("nav.emailPlaceholder")}
                  id="email"
                  name="email"
                />
                <ErrorMessage name="email">
                  {(e) => <div className={styles.errors}>{e}</div>}
                </ErrorMessage>

                <label htmlFor="password">{t("nav.password")}</label>
                <Field
                  type="password"
                  placeholder={t("nav.passwordPlaceholder")}
                  id="password"
                  name="password"
                />
                <ErrorMessage name="password">
                  {(e) => <div className={styles.errors}>{e}</div>}
                </ErrorMessage>

                <span
                  className={styles.forget}
                  onClick={() => setButtonPopup([true, "forget"])}
                >
                  Forgot password ?
                </span>

                <Stack direction="row" className={styles.continueS}>
                  <Box>
                    <button type="submit" disabled={isLoading}>
                      {t("nav.signin")}
                    </button>

                    <Typography fontSize="12px" mt="10px">
                      <span>
                        {t("nav.signInPopup.note2")}
                        <span
                          onClick={() =>
                            setButtonPopup([true, t("nav.register")])
                          }
                          style={{ color: "#BF8148", cursor: "pointer" }}
                        >
                          {t("nav.register")}
                        </span>
                      </span>
                    </Typography>
                  </Box>

                  <Box className={styles.continue__with}>
                    <p>{t("nav.contWith")}</p>

                    <Stack direction="column">
                      <a href="#">
                        <img src={fac} alt="fac" />
                      </a>

                      <GoogleSignIn />

                      <a href="#">
                        <img src={apple} alt="apple" />
                      </a>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Stack>
    </>
  );
}
