import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import {Formik} from "formik"
import { object,number } from "yup"

const passwordSchema = object().shape({
    passwordLength : number()
                        .min(5,"number should be greater than 5")
                        .max(10,"Number should be less than 10")
                        .required("Number should be present")

    })

const PasswordProject = () => {

    let [password,setPassword] = useState("")
    
    let [passwordStatus, setPasswordStatus] = useState(false)
    let [uppercase,setUppercase] = useState(true)
    let [lowercase,setLowercase] = useState(false)
    let [nums,setNums] = useState(false)
    let [syms,setSyms] = useState(false)

    function generatePassword(passwordLength : number)
    {
        let characterString = "";
        let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        let numbs = "0123456789";
        let symbols = "!@#$%^&*()_+{}[]"

        if (uppercase)
        {
            characterString += upperLetters
        }
        
        if (lowercase)
        {
            characterString += lowerLetters
        }

        if(nums)
        {
            characterString += numbs
        }

        if(syms)
        {
            characterString += symbols
        }

        let word = createPassword(characterString , passwordLength)
        return word;
    }

    function createPassword(str : string, size : number)
    {
        let result = "";
        for (let i = 0;i<size;i++)
        {
            let characterIndex = Math.round(Math.random() * str.length);
            result += str.charAt(characterIndex);
        }
        console.log(result);
        return result;
    }
  return (
    <Formik
    initialValues={{passwordLength : ""}}
    validationSchema={passwordSchema}
    onSubmit={(values)=>{
        // generatePassword(Number(values.passwordLength))
        console.log(values);
        let word = generatePassword(+values.passwordLength)
        setPassword(word);
        setPasswordStatus(true);
    }}>
        
        {({values,errors,isValid,handleSubmit,handleChange,touched})=>{
            return (<>

                <Text style = {styles.project_heading}>Password Generator</Text>
                <View style = {styles.box1}>
                  <Text style = {styles.box1_text}>Password Length</Text>
                  <TextInput
                  style = {styles.box1_input}
                  value = {values.passwordLength}
                  onChangeText={handleChange("passwordLength")}
                  keyboardType='numeric'
                  placeholder='ex : 8'
                  placeholderTextColor={"lightgrey"}
                  ></TextInput>
                </View>

                {errors.passwordLength && 
                <Text style = {styles.box1_error}>{errors.passwordLength}</Text>}
          
                <View style = {styles.options}>
                  <Text style = {styles.options_text}>using uppercase</Text>
                  <BouncyCheckbox
                  disableBuiltInState
                  isChecked = {uppercase}
                  onPress={()=>{setUppercase(!uppercase)}}
                  fillColor='blue'
                  ></BouncyCheckbox>
          
                </View>
                <View style = {styles.options}>
                  <Text style = {styles.options_text}>using lowercase</Text>
                  <BouncyCheckbox
                  disableBuiltInState
                  isChecked = {lowercase}
                  onPress={()=>{setLowercase(!lowercase)}}
                  fillColor='green'
                  ></BouncyCheckbox>
                </View>
                <View style = {styles.options}>
                  <Text style = {styles.options_text}>using numbers</Text>
                  <BouncyCheckbox
                  disableBuiltInState
                  isChecked = {nums}
                  onPress={()=>{setNums(!nums)}}
                  fillColor='orange'
                  ></BouncyCheckbox>
                </View>
                <View style = {styles.options}>
                  <Text style = {styles.options_text}>using symbols</Text>
                  <BouncyCheckbox
                  disableBuiltInState
                  isChecked = {syms}
                  onPress={()=>{setSyms(!syms)}}
                  fillColor='purple'
                  ></BouncyCheckbox>
                </View>
          
                <View style = {styles.button_con}>
                <TouchableOpacity style={styles.button_hover} activeOpacity={0.2}>
                    <Text style={styles.button} onPress={handleSubmit as () => void}>
                        Generate Password
                    </Text>
                </TouchableOpacity>
          
                  <TouchableOpacity style = {styles.button_hover} activeOpacity={0.2}>
                      <Text style = {styles.button}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
                
                
                <View style = {styles.result_con}>
                  <View style = {styles.result_con2}>
                      <Text style = {styles.result_heading}>Generated password </Text>
                      <Text style = {styles.result} selectable={true}>{password}</Text>
                  </View>
                </View>
                
          
                
          
              </>)
        }}
    </Formik>
    
  )
}

export default PasswordProject

const styles = StyleSheet.create({
    project_container : {
        backgroundColor : "lightblue",
        marginTop : 10,
        display : "flex",
        alignItems : "center"
    },

    project_heading : {
        marginVertical : 10,
        fontSize : 25,
        fontWeight : "bold",
        // backgroundColor : "yellow",
        textAlign : "center"
        
    },

    box1  : {
        // backgroundColor : "green",
        marginVertical : 10,
        display : "flex",
        flexDirection : "row",
        justifyContent : 'space-around',
        alignItems : "center"
        
    },
    box1_text : {
        fontSize : 18,
        fontWeight : "bold",
    },
    box1_input : {
        backgroundColor : "black",
        width : 100,
        borderRadius : 6,
        color : "white",
        paddingHorizontal : 30
    },
    box1_error : {
        // backgroundColor : "yellow",
        textAlign : "right",
        marginHorizontal : 15,
        color : "red"
    },
    options : {
        // backgroundColor : "yellow",
        marginVertical : 10,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around",
        paddingVertical : 5, 
    },
    options_text : {
        fontSize : 16,
        fontWeight : "bold"
    },
    button_con : {
        // backgroundColor : "yellow",
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-around",
        paddingVertical : 5, 
        
    },
    button : {
        backgroundColor : "black",
        color : "white",
        padding : 20,
        borderRadius : 6,
    },
    button_hover : {
        backgroundColor : "purple",
        borderRadius : 6
    },
    result_con : {
        // backgroundColor : "yellow",
        marginVertical : 10,
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        paddingVertical : 5, 
    },
    result_con2 : {
        // backgroundColor : "yellow",
        padding : 20,
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        
    },
    result_heading : {

    },
    result : {
        fontSize : 40,
        fontWeight : "bold",
        marginVertical : 10,
    },
    
    
})