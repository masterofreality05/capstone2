import * as yup from 'yup'

const recipeSchema = yup.object().shape({
    title: yup.string().required("Field is required"),
    instructions: yup.string().required("Field is required")

})


export default recipeSchema;