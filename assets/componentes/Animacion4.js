import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Animacion4 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);
    const rotate = animacion.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.wrapper}>
            <Animated.View style={[styles.card, { transform: [{ rotate }] }]}>
                <Animated.Image
                    source={{ uri: 'https://picsum.photos/seed/rotate/200/200' }}
                    style={styles.image}
                />
            </Animated.View>
            <View style={styles.pulse} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 160,
    },
    card: {
        width: 130,
        height: 130,
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#6c63ff',
    },
    image: {
        width: 130,
        height: 130,
    },
    pulse: {
        position: 'absolute',
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'rgba(108,99,255,0.2)',
    },
});

export default Animacion4;
