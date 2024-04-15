import React from "react";
import {StyleSheet, View,Button,Touchable, TouchableOpacity } from "react-native";
import { Text } from "react-native";
export default () => 
{
    return (
<View style= {{ flex :1, justifyContent:'center' }} > 
< Button title =" Button 1 " onPress={()=> alert( " HELLO")} /> 
<TouchableOpacity 
onPress={() => alert ("hello2 ")}
style = {{
  backgroundColor: 'yellow',
  padding : 10,
  alignItems: "center",
  marginTop : 10,
}}
>

<Text style={{ color:'white', fontSize : 18}}> Button 2 </Text>


</TouchableOpacity>

</View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent: 'center',
    },

    Button:
    {
        backgroundColor: 'aqua',
        marginTop: 10,
        alignItems: " center",
        padding: 10
    },
    TextStyle:
    {
      color: ' white',
        fontSize : 18
    }
  });
  