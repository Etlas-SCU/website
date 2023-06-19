import React, { useEffect, useState } from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import styles from "./sign_reg.module.css";
import reg from "../../../images/Pics/register.png";
import fac from "../../../images/Pngs/Groupfac.png";
import google from "../../../images/Pngs/Groupgoogle.png";
import apple from "../../../images/Pngs/Groupapple.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Typography } from "@mui/material";
import { Context } from "../../Context/Context";

export default function Register() {
  const { t } = useTranslation();
  const { setButtonPopup } = useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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

  const onSubmit = (values) => {
    console.log(values);
    setButtonPopup([false, ""]);
  };
  return (
    <>
      {isLoading ? (
        <Skeleton variant="rectangular" width={460} height={530} />
      ) : (
        <img className={styles.popup__img} src={reg} alt="formImg" />
      )}
      <Stack
        sx={{
          m: "24px 0 0 20px ",
        }}
        className={styles.form}
      >
        <Box>
          <Typography fontWeight="800"> {t("nav.register")}</Typography>
          <Typography fontSize="11px">
            {t("nav.RegisterPopup.note1")}
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

                <Stack direction="row" className={styles.continueS}>
                  <Box>
                    <button type="submit">{t("nav.register")}</button>

                    <Typography fontSize="12px" mt="10px">
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
                    </Typography>
                  </Box>

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
                </Stack>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Stack>
    </>
  );
}
