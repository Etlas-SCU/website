import React, { useState } from 'react';
import Style from './ContactUs.module.css'
import { Box, Stack } from '@mui/material';
import Econtact1 from '../../images/Pngs/e(contactus).png'
import Econtact2 from '../../images/Pngs/e(contactus)2.png'
import Statue from '../../images/Pngs/Statue(Contact Us).png'
import PopUp from '../../components/PopUp_Message/PopUp';
import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {Context} from '../../components/Context/Context' ;
import { useContext } from 'react';
import { ContactUs } from '../../repositories/ContactUsRepo';

export default function ContactUS() {

    const {userData} = useContext(Context) ;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [buttonPopup, setButtonPopup] = useState(false);

    const validationSchema = Yup.object({
        fullname: Yup.string().required('required'),
        email: Yup.string().email('invalid email format').required('required'),
        subject: Yup.string().required('required')
    })

    const onSubmit = async () => {
        const result = await ContactUS(fullName , email , subject , message) ;
        if(result.isError){
            console.log(result.message) ;
        }else{
            console.log(result.body) ;
        }

        setFullName('') ;
        setEmail('');
        setSubject('');
        setMessage('');
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
                        >
                            <Form >
                                <Stack direction='column'>
                                    <Stack direction='row' className='name_email'>
                                        <Stack direction='column'>
                                            <label htmlFor='name'>Full Name</label>
                                            <Field
                                                type='text'
                                                placeholder='Full Name'
                                                id='fullname'
                                                name='fullname'
                                                onChange={(fullName) => setFullName(fullName)}
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
                                                onChange={(email) => setEmail(email)}
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
                                        onChange={(subject) => setSubject(subject)}
                                    />
                                    <ErrorMessage name='subject'>
                                        {(e) => <div className={Style.error}>{e}</div>}
                                    </ErrorMessage>
                                    <label htmlFor='message'>Message</label>
                                    <Field
                                        type='text'
                                        placeholder='Write a message'
                                        id='message'
                                        name='message'
                                        className={Style.message}
                                        onChange={(message) => setMessage(message)}
                                    />
                                </Stack>
                            </Form>
                        </Formik>
                    </Box>
                    <Box className={Style.sec2}>
                        <button type='submit' className={Style.btn_submit} onClick={() => {setButtonPopup(true); onSubmit();}}>Submit</button>
                        <img src={Econtact2} alt='e2' className={Style.second_eimg} />
                    </Box>
                </Box>
                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <Box>
                        <h2 className={Style.title_popup}>Thanks for contacting us</h2>
                        <p className={Style.prag_popup}>Your message has been sent successfully</p>
                    </Box>
                </PopUp>
            </Box>
            <Box width='42%' className={Style.contact_eimg}>
                <img src={Statue} alt='statue' className={Style.contact_img} />
            </Box>
        </Stack>

    );
}