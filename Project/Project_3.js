import React from "react";
import { Touchable, View,props,Text, TouchableOpacity,  } from "react-native";


const Button = (props) => (
  <TouchableOpacity 
  onPress = { props.onPress}
  style = {{ 
      backgroundColor: "ff637c",
      alignSelf: "center",
      padding:10,
      margin:10,
      ...props.Buttonstyle,}}
>  

<Text style ={{color:"black"}}> {props.Text} </Text>
</TouchableOpacity>

);
export default () => (
<View style ={{ flex:1, justifyContent:"center"}} >
<Button
 Text ="hello"
  onPress = {() => alert ("hello")}
  Buttonstyle={{ backgroundColor : "green"}}
   />
<Button
        Text=" Say GoodBye"
        onPress={() => alert("goodbye")} 
        Buttonstyle={{ backgroundColor : "green"}} />


        </View>

)