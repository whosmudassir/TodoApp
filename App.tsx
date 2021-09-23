import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import List from './components/List'
import Input from './components/Input'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {todoreducer} from './redux/reducer'

const store=createStore(todoreducer)

export default function App() {

  return (
    <Provider store={store}>
    <View style={styles.container}>
      <View><Text>Todo App</Text>
      <Input/>
      <List />
      </View>
    </View>
    </Provider>
  )
}

const styles=StyleSheet.create({
  container:{
    padding:50,
    flex:1,
  }
})