import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const Animacion2 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    }, []);

    const scale = animacion.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    return (
        <View style={styles.wrapper}>
            <Animated.View style={[styles.card, { transform: [{ scale }], opacity: animacion }]}>
                <Animated.Image
                    source={{ uri: 'https://picsum.photos/seed/avatar/200/200' }}
                    style={[styles.image, { transform: [{ scale }] }]}
                />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>PRO</Text>
                </View>
            </Animated.View>
            <Text style={styles.label}>Avatar con escala</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    card: {
        width: 120,
        height: 120,
        borderRadius: 60,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#6c63ff',
    },
    image: {
        width: 120,
        height: 120,
    },
    badge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#6c63ff',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderTopLeftRadius: 10,
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    label: {
        color: '#8888aa',
        fontSize: 11,
        marginTop: 8,
    },
});

export default Animacion2;
