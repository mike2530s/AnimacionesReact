import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Animacion3 = () => {
    const [animacion] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 42,
            duration: 2000,
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <View style={styles.wrapper}>
            <Animated.Image
                source={{ uri: 'https://picsum.photos/seed/typo/300/120' }}
                style={styles.image}
            />
            <View style={styles.textOverlay}>
                <Animated.Text style={[styles.heading, { fontSize: animacion }]}>
                    Tipografía
                </Animated.Text>
                <Animated.Text style={[styles.sub, { opacity: animacion.interpolate({ inputRange: [14, 42], outputRange: [0, 1] }) }]}>
                    Escalado de fuente animado
                </Animated.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 120,
        position: 'absolute',
    },
    textOverlay: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(15,15,26,0.7)',
    },
    heading: {
        fontWeight: '800',
        color: '#fff',
        letterSpacing: 1,
    },
    sub: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
        marginTop: 4,
        letterSpacing: 0.3,
    },
});

export default Animacion3;
