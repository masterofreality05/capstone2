import React, { useState } from 'react';
import {useFormik} from 'formik';
import searchRecipeSchema from '../schemas/searchrecipeschema';
import axios from 'axios';
import addSearchedToDB from '../helpers/addSearchResultsDB';
import recipeAPISearch from '../helpers/searchRecipesAPI';
const inputs = ["ingrediants"]
const initalializers =  {
    ingrediants: "",
}

function SearchRecipeForm({setSearchedRecipes}){
    let [failedValidation, setFailedValidation] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("running hansdlesubmit")
        if (Object.keys(errors).length > 0){
            alert("please fill out all fields")
            setFailedValidation(true)
        } else {
            setFailedValidation(false)
            console.log("handling submit of search recipe form")
            console.log("submitting recipe form", values.ingrediants)
            let recipes = await recipeAPISearch(values.ingrediants)
          
              setSearchedRecipes(recipes)
            
             
        }    
    }    
            

    let {errors, touched, values, handleChange, handleBlur} = useFormik({
        initialValues: initalializers,
        validationSchema: searchRecipeSchema,
    });

    return(
        <>
        <h1>Search for a recipe with some ingrediants</h1>
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

 export default SearchRecipeForm;