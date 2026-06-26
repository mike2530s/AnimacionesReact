import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const Animacion6 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <View style={styles.wrapper}>
            <Animated.View style={[styles.card, {
                transform: [{ scale: animacion }],
                opacity: animacion
            }]}>
                <Animated.Image
                    source={{ uri: 'https://picsum.photos/seed/spring/300/180' }}
                    style={styles.image}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        height: 160,
        borderRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Animacion6;
