import React from "react";
import { Box, Stack } from "@mui/material";
import styles from "../Popup.module.css";
import sign from "../../../images/Pics/signin.png";
import fac from "../../../images/Pngs/Groupfac.png";
import google from "../../../images/Pngs/Groupgoogle.png";
import apple from "../../../images/Pngs/Groupapple.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Typography } from "@mui/material";
import { Context } from "../../Context/Context";

export default function SignIn() {
  const { t } = useTranslation();
  const { setButtonPopup } = useContext(Context);

  const initialValues = {
    email: "",
    address: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email(t("nav.emailformat")).required(t("nav.required")),
    password: Yup.string()
      .required(t("nav.required"))
      .min(8, t("nav.passwordShort"))
      .matches(/[a-zA-Z]/, t("nav.passwordLetters")),
  });

  const onSubmit = (values) => {
    console.log(values);
    setButtonPopup([false, ""]);
  };
  return (
    <>
      <img className={styles.popup__img} src={sign} alt="formImg" />
      <Stack
        sx={{
          width: { xs: "90%", md: "70%" },
          m: "50px 15px 0",
        }}
      >
        <Box>
          <Typography fontWeight="800">SignIn</Typography>
          <Typography fontSize="12px" pt="5px">
            {t("nav.signInPopup.note1")}
          </Typography>
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

                <Box>
                  <button type="submit">{t("nav.signin")}</button>

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
                    {/* )} */}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="flex-end"
                  height="195px"
                  alignItems="flex-end"
                >
                  <Box className={styles.continue__with}>
                    <p>{t("nav.contWith")}</p>

                    <Stack direction="column">
                      <a href="#">
                        <img src={fac} alt="fac" />
                      </a>
                      <a href="#">
                        <img src={google} alt="google" />
                      </a>
                      <a href="#">
                        <img src={apple} alt="apple" />
                      </a>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Stack>
    </>
  );
}
