import React, { useEffect, useState } from 'react'
import { Text, View, Animated, StyleSheet } from 'react-native';

const Animacion1 = () => {
    const [animacion] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <View style={styles.wrapper}>
            <Animated.View style={[styles.card, { opacity: animacion }]}>
                <Animated.Image
                    source={{ uri: 'https://picsum.photos/seed/hero/400/200' }}
                    style={styles.image}
                />
                <View style={styles.overlay}>
                    <Text style={styles.title}>Escapada Montañosa</Text>
                    <Text style={styles.subtitle}>Descubre la naturaleza salvaje</Text>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        height: 180,
        borderRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.8)',
        marginTop: 4,
    },
});

export default Animacion1;
