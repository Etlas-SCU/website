import { Box, Stack, Typography } from "@mui/material";
import React from "react";
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

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  phone: Yup.string().required("required"),
  email: Yup.string().email("invalid email format").required("required"),
  password: Yup.string()
    .required("required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password password must contain Latin letters."),
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm({ values: "" });
};
export default function Popup({ trigger, setTrigger }) {
  const register = trigger[1] === "Register" ? true : false;

  return trigger[0] ? (
    <Box className={styles.popup}>
      <Stack direction="row" className={styles.popup_inner}>
        <Box sx={{ width: "30%", display: { xs: "none", md: "block" } }}>
          <img
            className={styles.popup__img}
            src={register ? reg : sign}
            alt="formImg"
          />
        </Box>

        <Stack
          sx={{
            width: { xs: "90%", md: "70%" },
            m: { xs: "20px 0px 0px 35px", md: "20px 10px" },
          }}
        >
          <Box>
            <Typography fontWeight="800">{trigger[1]}</Typography>
            <Typography fontSize="12px" pt="5px">
              {register
                ? "Please, enter your information carefully"
                : "Please, enter your account"}
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
                      <label htmlFor="name">name</label>
                      <Field
                        type="text"
                        placeholder="Your name"
                        id="name"
                        name="name"
                      />
                      <ErrorMessage name="name">
                        {(e) => <div className={styles.errors}>{e}</div>}
                      </ErrorMessage>
                    </>
                  )}

                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    placeholder="Your email"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage name="email">
                    {(e) => <div className={styles.errors}>{e}</div>}
                  </ErrorMessage>

                  <label htmlFor="password">password</label>
                  <Field
                    type="password"
                    placeholder="Your password"
                    id="password"
                    name="password"
                  />
                  <ErrorMessage name="password">
                    {(e) => <div className={styles.errors}>{e}</div>}
                  </ErrorMessage>

                  {register && (
                    <>
                      <label htmlFor="phone">Phone number</label>
                      <Field
                        type="text"
                        placeholder="Your phone number"
                        id="phone"
                        name="phone"
                      />
                      <ErrorMessage name="phone">
                        {(e) => <div className={styles.errors}>{e}</div>}
                      </ErrorMessage>

                      <label htmlFor="address">Address</label>
                      <Field
                        type="text"
                        placeholder="Your address"
                        id="address"
                        name="address"
                      />
                    </>
                  )}
                  <img className={styles.e} src={e} alt="epng" />

                  <Stack direction="row"  sx={{justifyContent:"space-between" ,flexWrap:"wrap"}}>
                    <Box> 
                      {register ? (
                        <button type="submit">Register</button>
                      ) : (
                        <button type="submit">Sign In</button>
                      )}

                      <Typography fontSize="12px" mt="10px">
                        {register ? (
                          <span>
                            Alearedy have an account?{" "}
                            <span style={{ color: "#BF8148" }}>Sign in</span>
                          </span>
                        ) : (
                          <span>
                            Don’t have an account yet?{" "}
                            <span style={{ color: "#BF8148" }}>Register</span>
                          </span>
                        )}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        margin: { xs: "10px 0", md: "0px 20px" },
                      }}
                      className={styles.continue__with}
                    >
                      <Typography
                        textAlign={{ xs: "none", md: "center" }}
                        ml={{ xs: "60px", md: "0" }}
                        fontWeight="600"
                        fontSize={{ xs: "13px", md: "1.1vw" }}
                      >
                        Or continue with
                      </Typography>

                      <Stack direction="column">
                        <a href="#">
                          <img src={fac} alt="fac"/>
                        </a>
                        <a href="#">
                          <img src={google} alt="google" />
                        </a>
                        <a href="#">
                          <img src={apple} alt="apple"/>
                        </a>
                      </Stack>
                    </Box>
                  </Stack>
                </Stack>
              </Form>
            </Formik>
          </Box>

          <Box className={styles.popup__closeBtn} onClick={() => setTrigger(false)}>
            <img src={close} alt="closeIcon" />
          </Box>
        </Stack>
      </Stack>
    </Box>
  ) : (
    ""
  );
}
