import React from 'react'

import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';

export default function Recovery() {

  return (
    <div className="container mx-auto">
      <Toaster position='top-center'reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center  h-screen '>
        <div className={styles.glass}>

            <div className="title flex flex-col items-center">
              <h2 className='text-5xl front-bold'>Password Recovery </h2>
              <span className='py-4 text-xl w-2/3 text-center text-blue-500'>Enter the new password</span>
            </div>
            <form className='pt-10' onSubmit>
                <div className='textbox flex flex-col items-center gap-6'>
                  <input className={styles.textbox} type="password" placeholder='OTP'/>
                  <button className={styles.btn} type='submit'>Generate Password</button>
                </div>

              <div className='text-center py-4'>
                <span>Can't get OTP <button className='text-red-500'>Resend</button></span>
              </div>

            </form>

        </div>
      </div>
    </div>

  )
}
