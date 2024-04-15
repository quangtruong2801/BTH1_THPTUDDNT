import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Square = ({text,bgColor = '#7ce0f9'}) =>(
    <View style={[MyStyle.box, {backgroundColor:bgColor}]}>
        <Text>{text}</Text>
    </View>
)

const Project_5 = () => {
  return (
    <View style={MyStyle.container}> 
      <Square text ="Square 1" bgColor='yellow'></Square>
      <Square text ="Square 2" bgColor='blue'></Square>
      <Square text ="Square 3" bgColor='orange'></Square>
    </View>
  )
}

export default Project_5

const MyStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    box:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    }
})