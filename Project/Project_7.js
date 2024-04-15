
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const MyStyle = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: "bold", fontSize: 18 },
  input: {
    marginTop: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 5,
  },
});

const Project_7 = () => {
    const [name, setName] = useState("");
    return (
        <View style={MyStyle.container}>
            <Text style={MyStyle.label}>What's your name?</Text>
            <TextInput
                style={MyStyle.input}
                placeholder=" Example : Kemo Doe"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                
                title="Say Hello"
                onPress={() => {
                    alert(`Hello, ${name}!`);
                    setName("");
                }}
            />
        </View>
    );
}

export default Project_7;