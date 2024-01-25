import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        const data = {
            name,
            email,
            password,
        }
    }

    return(
    <View style={styles.container}>

        <Text style={styles.title}>Cadastro</Text>

        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={name}
            placeholder='Digite seu nome'
        >
        </TextInput>

        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder='Digite seu email'
        >
        </TextInput>

        <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder='Digite sua senha'
            secureTextEntry={true}
        >
        </TextInput>

        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: '#000',
        padding: 10
    },
    input: {
        justifyContent: 'center',
        borderColor: "black",
        width: "90%",
        borderWidth: 3,
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    button: {
        margin: 5,
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center',
        width: '50%',
        height: '15%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor:'#000',
        backgroundColor: '#28d109',

    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    }
})
