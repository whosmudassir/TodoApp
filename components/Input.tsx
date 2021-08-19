import React, {useState} from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import {db} from '../config'
import firebase from 'firebase'

export default function Input() {

    const [textInput, setTextInput] = useState<string>("")

    const addingTodo=(input:string)=>{
        if(input.length>0){
        db.collection("todos").add({ todo: input, complete:false , timestamp: firebase.firestore.FieldValue.serverTimestamp() });
        setTextInput("")
      }else{
        Alert.alert('Empty Input', 'Please type something to make a todo', [{
        text : 'Ok', onPress:()=>console.log("empty value")
        }])
      }

    }

    return (
        <View>
            <TextInput 
            style={styles.inputField}
            value={textInput}
            onChangeText={(value)=>setTextInput(value)}
            />
            <Button title="add Todo"
            onPress={()=>addingTodo(textInput)}/>
        </View>
    )
}

const styles=StyleSheet.create({

  inputField:{
    width:200,
    borderWidth:1,
    padding:5,
    margin:5,
    borderRadius:5,
    borderColor:'#777'
  },
})