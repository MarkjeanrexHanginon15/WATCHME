import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
    router.push('/home'); // Navigate to Home screen upon successful login
  };

  const handleSignUp = () => {
    router.push('/signup'); // Navigate to the signup page
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE40RUns5KIvAOBag57Nd6Dz2oferHxB_kbg&s' }} // Replace with your image URL
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#4A90E2" />
      <View style={styles.signupButton}>
        <Button title="Don't have an account? Sign Up" onPress={handleSignUp} color="#7ED321" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // Updated light gray background
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    height: 50,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  signupButton: {
    marginTop: 15,
    width: '80%',
  },
});

export default Login;
