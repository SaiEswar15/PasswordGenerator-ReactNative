import { object,number } from "yup"

const validatePassword = object().shape({
    generatedPassword : number()
                        .min(5,"number should be greater than 5")
                        .max(10,"Number should be less than 10")
                        .required("Number should be present")

    })

export default validatePassword;