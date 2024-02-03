import * as yup from 'yup'

const userIngrediantSchema = yup.object().shape({
    ingrediants: yup.string().required("Field is required"),
    

})


export default userIngrediantSchema;