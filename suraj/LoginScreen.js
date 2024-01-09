    import React, { useState } from "react";
    import { View, Text, TextInput, StyleSheet, Button,Alert,TouchableOpacity,Image,ImageBackground } from "react-native";
    import { useNavigation } from '@react-navigation/native';
    import { theme } from './theme'

    const LoginScreen = () => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const navigation = useNavigation();

    
  const handleLogin = () => {
    if (!loginId.trim() || !password.trim()) {
      Alert.alert('Incomplete Credentials', 'Please enter both login-Id and password.');
      return;
    }

    if (loginId === 'suraj' && password === 'suraj') {
      setLoginSuccessful(true);
      Alert.alert('Login Successful', 'You have successfully logged in.');
      navigation.navigate('Home');
    } else {
      Alert.alert('Unsuccessful attempt', 'You have entered wrong credentials.');
      setLoginSuccessful(false);
    }
  };

    return (
        <ImageBackground source={require('./background.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
        
        <Text style={styles.header}>Welcome to Login Page</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter the Login-id"
            value={loginId}
            onChangeText={setLoginId}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter Password    "
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} 
        />
              
        <Button
            style={styles.buttonContainer}
            title="Login"
            onPress={handleLogin}
            color="red"
        />
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
    
        </View>
        </ImageBackground>
    );
    };

    const styles = StyleSheet.create({
        backgroundImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
          },
        input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white', 
    borderWidth: 1,  
    borderColor: 'black', 
    borderRadius: 10, 
    width: 250,
    marginLeft:65,
    maxHeight: 300,
    },
    buttonContainer: {
        marginTop: 20,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
      header: {
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 12,
      },
      image: {
        width: 110,
        height: 110,
        marginBottom: 8,
      },
    });

    export default LoginScreen;
