import {toast} from "react-hot-toast";

export async function usernameValidate(values){
    const errors=usernameVerify({},values);

    return errors;

}

function passwordVerify(errors={},values){

    //const specialChars=~`!@#$%^&*()-_+={}[]|/\:;"<>,.?`;


    if(!values.password){
        errors.password=toast.error("Password Required..");
    } else if(values.password.includes(" ")){
        errors.password=toast.error("Wrong Password...");
    } else if(values.password.length<6){
        errors.password=toast.error("Password must be more then 6 letters....");
    } 
    // else if(specialChars.test(values.password)){
    //         errors.password=toast.error("Password must have Special Characters");
    // }
    return errors;
}

export async function passwordValidate(values){
    const errors=passwordVerify({},values);
    return errors;
}

export async function resetPasswordValidation(values){
    const errors = passwordVerify({},values);

    if(values.password!==values.confirm_pwd){
        errors.exist=toast.error("Password not match");
    }
    return errors;
}


export async function registerValidate(values){
    const errors=emailVerify({ },values);
    passwordVerify({ },values);
    usernameVerify({ },values);

    return errors;
}

export async function profileValidate(values){
    const errors=emailVerify({ },values);

    return errors;
}


function usernameVerify(error ={},values){
    if(!values.username){
        error.username=toast.error('Username Required..');
    }
    else if(values.username.includes(" ")){
        error.username= toast.error('Invalid Username...')
    }
    return error;
}

function emailVerify(error={},values){
    if(!values.email)
        error.email=toast.error("Email Required");
    else if(values.email.includes(" ")){
        error.email=toast.error("Wrong Email");
    }
    return error;
}
