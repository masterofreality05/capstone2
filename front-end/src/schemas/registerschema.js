import * as yup from 'yup'

const basicRegisterSchema = yup.object().shape({
    username: yup.string().required("Field is required"),
    password: yup.string().required("Field is required"),
    firstName: yup.string().required("Field is required"),
    lastName: yup.string().required("Field is required"),
    email: yup.string().required("Field is required")

})


export default basicRegisterSchema;