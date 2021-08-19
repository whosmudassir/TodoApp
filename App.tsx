import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import List from './components/List'
import Input from './components/Input'

export default function App() {

  return (
    <View style={styles.container}>
      <View><Text>Todo App</Text>
      <Input/>
      <List />
   
      </View>
      
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    padding:50
  }
})