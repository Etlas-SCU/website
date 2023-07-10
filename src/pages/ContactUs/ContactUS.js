import React, { useState , useContext } from 'react';
import Style from './ContactUs.module.css'
import { Box, Stack } from '@mui/material';
import Econtact1 from '../../images/Pngs/e(contactus).png'
import Econtact2 from '../../images/Pngs/e(contactus)2.png'
import Statue from '../../images/Pngs/Statue(Contact Us).png'
import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ContactUs } from '../../repositories/ContactUsRepo';
import MPopUp from "../../components/PopUp_Message/error/MPopUp";
import { Context } from "../../components/Context/Context";

export default function ContactUS() {

    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const { setButtonPopup, setMassagePopup } = useContext(Context);
    const [popup, setPopup] = useState(null);

    const validationSchema = Yup.object({
        full_name: Yup.string().required('required'),
        email: Yup.string().email('invalid email format').required('required'),
        subject: Yup.string().required('required'),
        message: Yup.string().required('required').min(100,'Small Message')
    });

    const onSubmit = async () => {
        const data ={
            full_name : full_name ,
            email : email ,
            subject : subject,
            message : message
        }
        const result = await ContactUs(data) ;
        if(result.isError){
            console.log(result.body.message) ;
            setMassagePopup(true);
            setPopup(<MPopUp type="error">{result.body.message}</MPopUp>);
        }else{
            console.log(result.body) ;
            setMassagePopup(true);
            setPopup(<MPopUp type="done">
                <h2>Thank You For Contacting Us</h2> <br />
                <p>Your message has been sent successfully</p>
            </MPopUp>);
        }

        setFullName("") ;
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <Stack className={Style.contactUs} direction='row'>
            <Box className={Style.sec1}>
                <img src={Econtact1} alt='e1' className={Style.first_eimg} />
                <Box className={Style.sec1_component}>
                    <h1 className={Style.contact_title}>Contact Us</h1>
                    <Box className={Style.contact} >
                        <Formik
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form >
                                <Stack direction='column'>
                                    <Stack direction='row' className='name_email'>
                                        <Stack direction='column'>
                                            <label htmlFor='name'>Full Name</label>
                                            <Field
                                                type='text'
                                                placeholder='Full Name'
                                                id='full_name'
                                                name='full_name'
                                                value={full_name}
                                                onChange={(event) => {setFullName(event.target.value)}}
                                            />
                                            <ErrorMessage name='fullname'>
                                                {(e) => <div className={Style.error}>{e}</div>}
                                            </ErrorMessage>
                                        </Stack>
                                        <Stack direction='column'>
                                            <label htmlFor='e-mail'>E-mail</label>
                                            <Field
                                                type='email'
                                                placeholder='Your Email'
                                                id='email'
                                                name='email'
                                                value={email}
                                                onChange={(event) => {setEmail(event.target.value)}}
                                            />
                                            <ErrorMessage name='email'>
                                                {(e) => <div className={Style.error}>{e}</div>}
                                            </ErrorMessage>
                                        </Stack>
                                    </Stack>
                                    <label htmlFor='subject'>Subject</label>
                                    <Field
                                        type='text'
                                        placeholder="I'd like to ask about"
                                        id='subject'
                                        name='subject'
                                        className={Style.subject}
                                        value={subject}
                                        onChange={(event) => {setSubject(event.target.value)}}
                                    />
                                    <ErrorMessage name='subject'>
                                        {(e) => <div className={Style.error}>{e}</div>}
                                    </ErrorMessage>
                                    <label htmlFor='message'>Message</label>
                                    <input
                                        type='text'
                                        placeholder='Write a message'
                                        id='message'
                                        name='message'
                                        className={Style.message}
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                    />
                                    <ErrorMessage name='subject'>
                                        {(e) => <div className={Style.error}>{e}</div>}
                                    </ErrorMessage>
                                </Stack>
                            </Form>
                        </Formik>
                    </Box>
                    <Box className={Style.sec2}>
                        <button type='submit' className={Style.btn_submit} onClick={() => {setButtonPopup(true); onSubmit();}}>Submit</button>
                        <img src={Econtact2} alt='e2' className={Style.second_eimg} />
                    </Box>
                </Box>
                {/* <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <Box>
                        <h2 className={Style.title_popup}>Thanks for contacting us</h2>
                        <p className={Style.prag_popup}>Your message has been sent successfully</p>
                    </Box>
                </PopUp> */}
                {popup}
            </Box>
            <Box width='42%' className={Style.contact_eimg}>
                <img src={Statue} alt='statue' className={Style.contact_img} />
            </Box>
        </Stack>

    );
}