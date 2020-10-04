import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/Octocat.png')}
                    />
                <Text
                    style={styles.title}
                >
                    An app made for github using React Native</Text>
            </View>
            <View>
                <LoginForm />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    imageContainer: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        width: 160,
        marginTop: 10,
        color: '#fff',
        textAlign: "center",
        opacity: 0.9
    },
    formContainer: {

    }
})
