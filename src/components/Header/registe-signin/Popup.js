import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./Popup.module.css";
import reg from "../../../images/Pics/register.png";
import sign from "../../../images/Pics/signin.png";
import close from "../../../images/Icons/close.png";
import fac from "../../../images/Pngs/Groupfac.png";
import google from "../../../images/Pngs/Groupgoogle.png";
import apple from "../../../images/Pngs/Groupapple.png";
import e from "../../../images/Pngs/e.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Context } from "../../Context/Context";

export default function Popup({ trigger, setTrigger }) {
  const { buttonPopup, setButtonPopup } = useContext(Context);

  const { t } = useTranslation();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("nav.required")),
    phone: Yup.string().required(t("nav.required")),
    email: Yup.string().email(t("nav.emailformat")).required(t("nav.required")),
    password: Yup.string()
      .required(t("nav.required"))
      .min(8, t("nav.passwordShort"))
      .matches(/[a-zA-Z]/, t("nav.passwordLetters")),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: "" });
  };

  const register = trigger[1] === "Register" ? true : false;

  return trigger[0] ? (
    <Box className={styles.popup}>
      <Stack direction="row" className={styles.popup_inner}>
      <img
            className={styles.popup__img}
            src={register ? reg : sign}
            alt="formImg"
          />
        <Stack
          sx={{
            width: { xs: "90%", md: "70%" },
            m: "50px 15px 0",
          }}
        >
          <Box>
            <Typography fontWeight="800">{trigger[1]}</Typography>
            <Typography fontSize="12px" pt="5px">
              {register
                ? t("nav.RegisterPopup.note2")
                : t("nav.signInPopup.note2")}
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
                  {register && (
                    <>
                      <label htmlFor="name">{t("nav.name")}</label>
                      <Field
                        type="text"
                        placeholder={t("nav.namePlaceholder")}
                        id="name"
                        name="name"
                      />
                      <ErrorMessage name="name">
                        {(e) => <div className={styles.errors}>{e}</div>}
                      </ErrorMessage>
                    </>
                  )}

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

                  {register && (
                    <>
                      <label htmlFor="phone">{t("nav.phone")}</label>
                      <Field
                        type="text"
                        placeholder={t("nav.phonePlaceholder")}
                        id="phone"
                        name="phone"
                      />
                      <ErrorMessage name="phone">
                        {(e) => <div className={styles.errors}>{e}</div>}
                      </ErrorMessage>

                      <label htmlFor="address">{t("nav.address")}</label>
                      <Field
                        type="text"
                        placeholder={t("nav.addressPlaceholder")}
                        id="address"
                        name="address"
                      />
                    </>
                  )}

                  <Box>
                    {register ? (
                      <button type="submit">{t("nav.register")}</button>
                    ) : (
                      <button type="submit">{t("nav.signin")}</button>
                    )}

                    <Typography fontSize="12px" mt="10px">
                      {register ? (
                        <span>
                          {t("nav.RegisterPopup.note2")}

                          <span
                            onClick={() =>
                              setButtonPopup([true, t("nav.signin")])
                            }
                            style={{ color: "#BF8148", cursor: "pointer" }}
                          >
                            {t("nav.signin")}
                          </span>
                        </span>
                      ) : (
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
                      )}
                    </Typography>
                  </Box>
                  <img className={styles.e} src={e} alt="epng" />

                  <Box display="flex" justifyContent="flex-end" height="195px" alignItems="flex-end">
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

          <Box
            className={styles.popup__closeBtn}
            onClick={() => setTrigger(false)}
          >
            <img src={close} alt="closeIcon" />
          </Box>
        </Stack>
      </Stack>
    </Box>
  ) : (
    ""
  );
}
