import React from 'react';
import Style from './Informations.module.css';
import { Box , Stack } from '@mui/system';
import ProfileImg from '../../../images/Pngs/Profile2.png';
import { Form, Formik } from 'formik';
import { useState } from 'react';

import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import { Zoom } from 'react-awesome-reveal';


export default function Informations() {
    
    const [fullName, setFullName] = useState("Basem Moahmed");
    const [editName, setEditName] = useState(false);

    const [email, setEmail] = useState("basem.m1337@gmail.com");
    const [editEmail, setEditEmail] = useState(false);

    const [password, setPassword] = useState("********");
    const [editPassword, setEditPassword] = useState(false);

    const [phone, setPhone] = useState("+20 101 629 7668");
    const [editPhone, setEditPhone] = useState(false);

    const [address, setAddress] = useState("Egypt - North Sinai - Al-Arish");
    const [editAddress, setEditAddress] = useState(false);

    const handleInputChange = (event) => {
        setFullName(event.target.value);
        setEmail(event.target.value);
        setPassword(event.target.value);
        setPhone(event.target.value);
        setAddress(event.target.value);
    };

    const onSave = (values, { resetEdit }) => {
        console.log(values);
        resetEdit({ values: "" });
    };
    

    return (
        <Stack>
            <Box className={Style.form_comp}>
                <Box className={Style.info}>
                    <Formik onSubmit={onSave}>
                        <Form>
                            <label className={Style.info_lab}>Full Name</label>
                            <input
                                type='text'
                                value={fullName}
                                name='fullname'
                                className={Style.prof_inp}
                                onChange={handleInputChange}
                                readOnly={!editName}
                            />

                            {editName ? (
                                <CheckIcon  className={Style.save_icon1} onClick={() => setEditName(false)} style={{fontSize : 'medium'}}/>

                            ) : (
                                <CreateIcon className={Style.edit_icon1} onClick={() => setEditName(true)} style={{fontSize : 'medium'}} />
                            )}

                            <label className={Style.info_lab}>E-mail</label>
                            <input
                                type='text'
                                value={email}
                                name='email'
                                className={Style.prof_inp}
                                onChange={handleInputChange}
                                readOnly={!editEmail}
                            />

                            {editEmail ? (
                                <CheckIcon className={Style.save_icon2} onClick={() => setEditEmail(false)} style={{fontSize : 'medium'}} />

                            ) : (
                                <CreateIcon className={Style.edit_icon2} onClick={() => setEditEmail(true)} style={{fontSize : 'medium'}}/>
                            )}

                            <label className={Style.info_lab}>Password</label>
                            <input
                                type='password'
                                value={password}
                                name='password'
                                className={Style.prof_inp}
                                onChange={handleInputChange}
                                readOnly={!editPassword}
                            />

                            {editPassword ? (
                                <CheckIcon  className={Style.save_icon3} onClick={() => setEditPassword(false)} style={{fontSize : 'medium'}}/>

                            ) : (
                                <CreateIcon  className={Style.edit_icon3} onClick={() => setEditPassword(true)} style={{fontSize : 'medium'}} />
                            )}

                            <label className={Style.info_lab} >Phone Number</label>
                            <input
                                type='text'
                                value={phone}
                                name='phone'
                                className={Style.prof_inp}
                                onChange={handleInputChange}
                                readOnly={!editPhone}
                            />
                            {editPhone ? (
                                <CheckIcon className={Style.save_icon4} onClick={() => setEditPhone(false)} style={{fontSize : 'medium'}}/>

                            ) : (
                                <CreateIcon  className={Style.edit_icon4} onClick={() => setEditPhone(true)} style={{fontSize : 'medium'}}/>
                            )}

                            <label className={Style.info_lab}>Address</label>
                            <input
                                type='text'
                                value={address}
                                name='address'
                                className={Style.prof_inp}
                                onChange={handleInputChange}
                                readOnly={!editAddress}
                            />
                            {editAddress ? (
                                <CheckIcon  className={Style.save_icon5} onClick={() => setEditAddress(false)} style={{fontSize : 'medium'}} />

                            ) : (
                                <CreateIcon  className={Style.edit_icon5} onClick={() => setEditAddress(true)} style={{fontSize : 'medium'}}/>
                            )}
                        </Form>
                    </Formik>
                </Box>
                <Box className={Style.info_img}>
                    <img src={ProfileImg} className={Style.prof_img} alt='profile_img' />
                </Box>
            </Box>
            <Zoom triggerOnce='false'>
            <Box className={Style.save}>
                <button type='submit' className={Style.btn_save}>Save</button>
            </Box>
            </Zoom>
        </Stack>
    )
}