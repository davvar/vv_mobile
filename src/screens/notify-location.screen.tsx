import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

const img = require('../../assets/images/location-icon.png')

export const NotifyLocationScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => alert('pressed')}>
                <Image
                    source={img}
                    style={styles.image}
                />
            </TouchableHighlight>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393e46'
    },
    image: {
        height: 300,
        width: 300,
    }
})
