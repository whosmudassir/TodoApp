import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import {db} from '../config'
import SingleTodo from './SingleTodo'

interface Todos{
   todo: {
    id:string,
    todo:string,
    complete:boolean
}[]
}

export default function List() {

    useEffect(()=>{
        getTodo()
      },[])
   

    const [todos, setTodos]=useState<Todos["todo"]>()
  
   const getTodo = () => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          complete : doc.data().complete
        }))
      );
    });
  };


    return (
        <View>
            
            <View style={styles.itemContainer}>
         
                    <FlatList
                    keyExtractor={(item)=>item.id}
                    data={todos}
                    renderItem={({item})=>(
                      <SingleTodo todo={item.todo} id={item.id} complete={item.complete}/>
                )}
                    />
                      </View>
        </View>
    )
}

const styles=StyleSheet.create({
    itemContainer:{
        
        margin:10
      }
})
