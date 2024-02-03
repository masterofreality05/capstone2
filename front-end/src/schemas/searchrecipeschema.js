import * as yup from 'yup'

const searchRecipeSchema = yup.object().shape({
    ingrediants: yup.string().required("Field is required"),
    

})


export default searchRecipeSchema;