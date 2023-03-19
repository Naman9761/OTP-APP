import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png';

import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';
import{useFormik} from 'formik';

import { passwordValidate } from '../helper/validate';

export default function Password() {

  const formik=useFormik({
    initialValues:{
      Password:''
    },

    validate: passwordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto">
      <Toaster position='top-center'reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center  h-screen'>
        <div className={styles.glass}>

            <div className="title flex flex-col items-center">
              <h2 className='text-5xl front-bold'>Hello I am div</h2>
              <span className='py-4 text-xl w-2/3 text-center text-blue-500'>hiii</span>
            </div>
            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt="avatar"/> </div>
                <div className='textbox flex flex-col items-center gap-6'>
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='password'/>
                  <button className={styles.btn} type='submit'>Sign In</button>
                </div>

              <div className='text-center py-4'>
                <span>Forgot Password <Link className='text-red-500' to='/recovery'>Recover Now</Link></span>
              </div>

            </form>

        </div>
      </div>
    </div>

  )
}
