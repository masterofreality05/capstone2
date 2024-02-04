import React, { useState, useContext } from 'react';
import {useFormik} from 'formik';
import basicRegisterSchema from '../schemas/registerschema';
import axios from 'axios';
import AppContext from '../AppContext';

const initalializers =  {
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    email:"",
    profile_img: ""
}

const inputs = ["username", "password", "firstName", "lastName", "email", "profile_img"]
function RegisterForm(props){
    let {setUser} = useContext(AppContext) 
    let [failedValidation, setFailedValidation] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (Object.keys(errors).length > 0){
            alert("please fill out all fields")
            setFailedValidation(true)
        } else {
            setFailedValidation(false)
            let newUser = await axios.post(
                'http://localhost:3001/auth/register'
                ,
                    {...values},
            )
            setUser({username: values.username,
                token :newUser.data.token})
        }         
            }

    let {errors, touched, values, handleChange, handleBlur} = useFormik({
        initialValues: initalializers,
        validationSchema: basicRegisterSchema,  
    });

    return(
        <>
        <h1>Register a new user</h1>
        <form autoComplete='off' onSubmit={handleSubmit}>
        {inputs.map(word => 
        <div className='form-group'>
            <label htmlFor={word}>{word}
            <input type="text" 
             id={word} 
             value={values.word}
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder={word}
             className={errors.word? 'input-error form-control': "form-control"}
            ></input>
            {failedValidation? <p className='text-danger'>{errors[word]}</p>: null}   
            {touched[word] && errors[word] && (<p className='invalid-feedback'>{errors[word]}</p>)}
            </label>
            </div>  
            )}
        <button type='submit'>Submit!</button>
        </form>
        </>
    )
} 
 export default RegisterForm;