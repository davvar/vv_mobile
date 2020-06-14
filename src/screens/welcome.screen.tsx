import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    Keyboard,
    ImageBackground
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const inputs = ['Loggin', 'Password']

    const navigateTo = (screen: string) => () => navigation.navigate(screen);
    const keyboardWillShow = ({ endCoordinates }) => setKeyboardHeight(endCoordinates?.height);
    const keyboardWillHide = () => setKeyboardHeight(0);

    useEffect(() => {
        Keyboard.addListener('keyboardWillShow', keyboardWillShow);
        Keyboard.addListener('keyboardWillHide', keyboardWillHide);

        return () => {
            Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
            Keyboard.removeListener('keyboardWillHide', keyboardWillHide);
        };
    }, []);

    return (
        <ImageBackground style={{ flex: 1, }} imageStyle={{ opacity: 1.6 }} source={require('../../assets/images/truck.jpg')}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/vv-logo.png')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    {inputs.map((val, i) => (
                        <TextInput
                            key={i}
                            style={styles.input}
                            placeholderTextColor="#cdcdcd"
                            placeholder={val}
                        />
                    ))}
                    <TouchableHighlight underlayColor='' style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={navigateTo('SignUp')}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableHighlight>
                </View>
                {!!keyboardHeight && <View style={{ height: keyboardHeight }} />}
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    inputContainer: {
        flex: 2,
        alignItems: 'center',
    },
    input: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        height: 30,
        width: '60%',
        fontSize: 20,
        color: 'white',
        marginBottom: 25,
        letterSpacing: 0.5,
        paddingBottom: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        backgroundColor: 'white',
        borderWidth: 1,
        height: 40,
        marginBottom: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold'
    },
});
