import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const Animacion7 = () => {
    const [animacion] = useState(new Animated.Value(-200));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
        }).start();
    }, []);

    const animatedStyle = {
        transform: [
            { translateY: animacion }
        ]
    }

    return (
        <View style={styles.container}>
            <Animated.ScrollView 
                style={[styles.scrollView, animatedStyle]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {[1, 2, 3, 4, 5].map((item) => (
                    <View key={item} style={styles.box}>
                        <Text style={styles.text}>Item {item}</Text>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 120,
        marginVertical: 20,
        width: '100%',
    },
    scrollView: {
        flexDirection: 'row',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#6c63ff',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    }
});

export default Animacion7;
