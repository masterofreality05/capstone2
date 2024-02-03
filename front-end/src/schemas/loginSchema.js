import * as yup from 'yup'

const basicLoginSchema = yup.object().shape({
    username: yup.string().required("Field is required"),
    password: yup.string().required("Field is required")
  

})


export default basicLoginSchema;