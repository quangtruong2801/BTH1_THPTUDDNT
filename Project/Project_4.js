import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'
 
const ProJect_4 =() => {


  const [ PressCount, SetPressCount] = useState(0);
  return(
      <View style ={{
        alignItems:" center ", marginTop:20,
      
      }} >
        <Text> You pressed : { PressCount} times </Text>
         
        
        <Button 
        
          title = {` Pressed ${PressCount} times` }  
          onPress={()=> SetPressCount(PressCount +1)}>
          </Button>
      </View>
  );
};
export default ProJect_4