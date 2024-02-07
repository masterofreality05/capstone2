import { useState } from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import recipeSchema from './schemas/recipeSchema';

const initalializers =  {
    title:"",
    ingrediants:"",
    instructions:"",
}
const inputs = ["title", "ingrediants", "instructions"]
function NewRecipeForm(props){
    let [failedValidation, setFailedValidation] = useState(false)
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (Object.keys(errors).length > 0){
            alert("please fill out all fields")
            setFailedValidation(true)
        } else {
            setFailedValidation(false)
            await axios.post(
                'http://localhost:3001/recipes/add'
                ,
                    {
                        ...values
                    },
            )
        }         
            }
    let {errors, touched, values, handleChange, handleBlur} = useFormik({
        initialValues: initalializers,
        validationSchema: recipeSchema,
    });
    return(
        <>
        <h1>Add a new recipe</h1>
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

export default NewRecipeForm;