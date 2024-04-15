import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Project_1 = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Hello World</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'black',
    },
});

export default Project_1;