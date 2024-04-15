import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Main = () => {
  const navigation = useNavigation();
  return (
    <View style ={MyStyle.ViewStyle}>
      <Text style={{textAlign:'center',position:'absolute',top:'5%',left:0,right:0,fontSize:20,fontWeight:'bold',color:'black'}}>Dang Quang Truong - 2024802010054 </Text>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_1')}>
          <Text style={MyStyle.TextStyle}>Bài 1</Text>
      </TouchableOpacity>
        <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_2')}>
          <Text style={MyStyle.TextStyle}>Bài 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_3')}>
          <Text style={MyStyle.TextStyle}>Bài 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_4')}>
          <Text style={MyStyle.TextStyle}>Bài 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_5')}>
          <Text style={MyStyle.TextStyle}>Bài 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_6')}>
          <Text style={MyStyle.TextStyle}>Bài 6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_7')}>
          <Text style={MyStyle.TextStyle}>Bài 7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Project_8')}>
          <Text style={MyStyle.TextStyle}>Bài 8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MyStyle.ButtonBg} onPress={() => navigation.push('Calculator')}>
          <Text style={MyStyle.TextStyle}>Calculator</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Main

var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
          flex:1,
            justifyContent:'center',
            backgroundColor:'yellow'
        },
        TextStyle:{
          color:'white',
        }
        ,ButtonBg:{
          borderRadius:10,
          backgroundColor:'green',
          marginBottom:10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginHorizontal:20
        }
    }
)