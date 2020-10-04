import React, { useRef } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import useForm from '../hooks/useForm'

const LoginForm = () => {
    const initialState = {
        user: '',
        password: ''
    }

    let passwordInput = null

    const onSubmit = values => {
        console.log(values)
    }

    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit)

    return (
        <View style={styles.inputContainer}>
            <StatusBar 
                barStyle='light-content'
            />
            <TextInput 
                style={styles.input}
                value={inputs.user}
                onChangeText={subscribe('user')}
                onSubmitEditing={() => passwordInput.focus()}
                placeholder='Username or email'
                returnKeyType="next"
                placeholderTextColor='rgba(255,255,255,0.6)'
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
            />
            <TextInput 
                autoCapitalize='none'
                returnKeyType="go"
                value={inputs.password}
                secureTextEntry
                onChangeText={subscribe('password')}
                style={styles.input}
                placeholder='Password'
                placeholderTextColor='rgba(255,255,255,0.6)'
                ref={(input) => passwordInput = input}
            />
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={handleSubmit}
                >
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    inputContainer: {
        padding: 25
    },  
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: "center",
        fontWeight: '700'
    }

})
