import React, { useContext , useState , useEffect } from 'react';
import Style from './Informations.module.css';
import { Box, Stack } from '@mui/system';
import ProfileImg from '../../../images/Pngs/Profile2.png';
import { Form, Formik } from 'formik';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import { Zoom } from "react-awesome-reveal";
import { editUserInfo } from "../../../repositories/ProfileRepo";
import MPopUp from "../../PopUp_Message/error/MPopUp";
import { Context } from "../../Context/Context" ;


export default function Informations() {

    const { setButtonPopup, setMassagePopup } = useContext(Context); 

    const [popup , setPopup] = useState(null);
    const { getUserData, updateUserData, userData } = useContext(Context);

    const [fullName, setFullName] = useState('');
    const [editName, setEditName] = useState(false);

    const [email, setEmail] = useState('');
    const [editEmail, setEditEmail] = useState(false);

    const [phone, setPhone] = useState('');
    const [editPhone, setEditPhone] = useState(false);

    const [address, setAddress] = useState('');
    const [editAddress, setEditAddress] = useState(false);
    
    useEffect(() => {
        async function getUserInfo() {
            const user_data = await getUserData();
            setFullName(user_data.full_name);
            setEmail(user_data.email);
            setPhone(user_data.phone_number);
            setAddress(user_data.address);
        }
        getUserInfo();
    }, [userData, updateUserData, getUserData]);

    const onSubmit = async () => {
        var editProfile = {
            full_name: fullName,
            email: email,
            address: address,
            phone_number: phone
        }

        console.log(editProfile);

        var result = await editUserInfo(editProfile);
        if (result.isError) {
            setMassagePopup(true);
            setPopup(<MPopUp type="error">Something Wrong</MPopUp>);
        } else {
            setMassagePopup(true);
            setPopup(<MPopUp type="done">Done</MPopUp>);
            await updateUserData(result.body);
        }
    }
   
    return (
        <Stack>
            <Box className={Style.form_comp}>
                <Box className={Style.info}>
                    <Formik>
                        <Form>
                            <label className={Style.info_lab}>Full Name</label>
                            <input
                                type='text'
                                value={fullName}
                                name='fullname'
                                className={Style.prof_inp}
                                onChange={(event) => {setFullName(event.target.value)}}
                                readOnly={!editName}
                            />

                            {editName ? (
                                <CheckIcon className={Style.save_icon1} onClick={() => setEditName(false)} style={{ fontSize: 'medium' }} />

                            ) : (
                                <CreateIcon className={Style.edit_icon1} onClick={() => setEditName(true)} style={{ fontSize: 'medium' }} />
                            )}

                            <label className={Style.info_lab}>E-mail</label>
                            <input
                                type='text'
                                value={email}
                                name='email'
                                className={Style.prof_inp}
                                onChange={(event) => {setEmail(event.target.value)}}
                                readOnly={!editEmail}
                            />

                            {editEmail ? (
                                <CheckIcon className={Style.save_icon2} onClick={() => setEditEmail(false)} style={{ fontSize: 'medium' }} />

                            ) : (
                                <CreateIcon className={Style.edit_icon2} onClick={() => setEditEmail(true)} style={{ fontSize: 'medium' }} />
                            )}

                            <label className={Style.info_lab} >Phone Number</label>
                            <input
                                type='text'
                                value={phone}
                                name='phone'
                                className={Style.prof_inp}
                                onChange={(event) => {setPhone(event.target.value)}}
                                readOnly={!editPhone}
                            />

                            {editPhone ? (
                                <CheckIcon className={Style.save_icon3} onClick={() => setEditPhone(false)} style={{ fontSize: 'medium' }} />

                            ) : (
                                <CreateIcon className={Style.edit_icon3} onClick={() => setEditPhone(true)} style={{ fontSize: 'medium' }} />
                            )}

                            <label className={Style.info_lab}>Address</label>
                            <input
                                type='text'
                                value={address}
                                name='address'
                                className={Style.prof_inp}
                                onChange={(event) => {setAddress(event.target.value)}}
                                readOnly={!editAddress}
                            />
                            {editAddress ? (
                                <CheckIcon className={Style.save_icon4} onClick={() => setEditAddress(false)} style={{ fontSize: 'medium' }} />

                            ) : (
                                <CreateIcon className={Style.edit_icon4} onClick={() => setEditAddress(true)} style={{ fontSize: 'medium' }} />
                            )}

                        </Form>
                    </Formik>
                </Box>
                <Box className={Style.info_img}>
                    <img src={ProfileImg} className={Style.prof_img} alt='profile_img' />
                </Box>
            </Box>
            {popup}
            <Zoom triggerOnce='false'>
                <Box className={Style.save} onClick={ () => {onSubmit()}  }>
                    <button type='submit' className={Style.btn_save}>Save</button>
                </Box>
            </Zoom>
        </Stack>
    )
}