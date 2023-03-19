import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png';


import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';
import{useFormik} from 'formik';

import { profileValidate } from '../helper/validate';
import convertToBase64 from '../helper/convert';

export default function Profile() {

  const[file,setFile]=useState()

  const formik=useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      mobile:'',
      email:'',
      address:'',
      pin:''
    },

    validate: profileValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
      values=await Object.assign(values, {profile:file||''})
      console.log(values)
    }
  })

  const onUpload=async e=>{
    const base64= await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">
      <Toaster position='top-center'reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center '>
        <div className={styles.glass} style={{width:"45%"}}>

            <div className="title flex flex-col items-center">
              <h2 className='text-5xl front-bold'>Profile</h2>
              <span className='py-2 text-xl w-3/3 text-center text-blue-500'>You can update the details</span>
            </div>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <label htmlFor="profile">
                     <img src={file||avatar} className={styles.profile_img} alt="avatar"/>
                </label>

                <input onChange={onUpload} type='file' id='profile' name='profile'/>
              </div>
                
                <div className='textbox flex flex-col items-center gap-6'>
                  <div className='name flex w-3/4 gap-10'>
                  <input {...formik.getFieldProps('firstName')} className={styles.textbox} type="text" placeholder='First name'/>
                  <input {...formik.getFieldProps('lastName')} className={styles.textbox} type="text" placeholder='Last name'/>
                  </div>

                  <div className='name flex w-3/4 gap-10'>
                  <input {...formik.getFieldProps('mobile')} className={styles.textbox}type="text" placeholder='Mobile No'/>
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email'/>
                  </div>

                  <div className='name flex w-3/4 gap-10'>
                  <input {...formik.getFieldProps('address')} className={styles.textbox}type="text" placeholder='Address'/>
                  <input {...formik.getFieldProps('pin')} className={styles.textbox}type="text" placeholder='Pin Code'/>

                  </div> 
                  <button className={styles.btn} type='submit'>Register</button> 
                 
                </div>

              <div className='text-center py-4'>
                <span>Come back Later<Link className='text-red-500'to="/">Log out</Link></span>
              </div>

            </form>

        </div>
      </div>
    </div>

  )
}
