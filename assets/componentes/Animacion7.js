import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const items = [
    { id: 1, title: 'Montaña', image: 'https://picsum.photos/seed/alpine/200/280' },
    { id: 2, title: 'Costa', image: 'https://picsum.photos/seed/coastal/200/280' },
    { id: 3, title: 'Bosque', image: 'https://picsum.photos/seed/forest/200/280' },
    { id: 4, title: 'Desierto', image: 'https://picsum.photos/seed/desert/200/280' },
    { id: 5, title: 'Urbano', image: 'https://picsum.photos/seed/urban/200/280' },
];

const Animacion7 = () => {
    const [animacion] = useState(new Animated.Value(-50));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                style={[styles.scroll, {
                    transform: [{ translateY: animacion }],
                    opacity: animacion.interpolate({
                        inputRange: [-50, 0],
                        outputRange: [0, 1]
                    })
                }]}
            >
                {items.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Animated.Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                        <View style={styles.cardOverlay}>
                            <Text style={styles.cardLabel}>{item.title}</Text>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 8,
        gap: 12,
    },
    card: {
        width: 140,
        height: 180,
        borderRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    cardOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    cardLabel: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
    },
});

export default Animacion7;
