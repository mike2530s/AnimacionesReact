import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const data = [
    { id: '1', title: 'FlatList Item 1' },
    { id: '2', title: 'FlatList Item 2' },
    { id: '3', title: 'FlatList Item 3' },
];

const Animacion8 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 4,
            tension: 20,
            useNativeDriver: true
        }).start();
    }, []);

    const animatedStyle = {
        opacity: animacion,
        transform: [
            { 
                scale: animacion.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1]
                }) 
            }
        ]
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Animated.FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                style={[styles.flatList, animatedStyle]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 20,
        paddingHorizontal: 20,
        height: 200,
    },
    flatList: {
        width: '100%',
    },
    item: {
        backgroundColor: '#2d2d50',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3d3d60',
    },
    title: {
        fontSize: 16,
        color: '#d0d0ff',
    }
});

export default Animacion8;
