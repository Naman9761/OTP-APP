import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';
import{useFormik} from 'formik';

import { resetPasswordValidation } from '../helper/validate';

export default function Reset() {

  const formik=useFormik({
    initialValues:{
      Password:'',
      confirm_pwd:''
    },

    validate: resetPasswordValidation,
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
        <div className={styles.glass} style={{width:"50%"}}>

            <div className="title flex flex-col items-center">
              <h2 className='text-5xl front-bold'>Hello I am div</h2>
              <span className=' text-xl w-2/3 text-center text-blue-500'>hiii</span>
            </div>
            <form className='py-10' onSubmit={formik.handleSubmit}>
                <div className='textbox flex flex-col items-center gap-6'>
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='New password'/>
                  <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="password" placeholder='Confirm password'/>
                  <button className={styles.btn} type='submit'>Reset</button>
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
