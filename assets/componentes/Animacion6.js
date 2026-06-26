import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Animacion6 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 2,
            tension: 50,
            useNativeDriver: true
        }).start();
    }, []);

    const animatedStyle = {
        transform: [
            { scale: animacion }
        ]
    }

    return (
        <View style={styles.container}>
            <Animated.Image 
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={[styles.image, animatedStyle]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    image: {
        width: 100,
        height: 100,
    }
});

export default Animacion6;
