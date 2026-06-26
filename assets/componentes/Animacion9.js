import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  }
];

const Animacion9 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }, []);

    const animatedStyle = {
        opacity: animacion,
        transform: [
            {
                translateX: animacion.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0] // Desliza desde la derecha
                })
            }
        ]
    };

    return (
        <View style={styles.container}>
            <Animated.SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                scrollEnabled={false}
                style={[styles.sectionList, animatedStyle]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    sectionList: {
        width: '100%',
    },
    item: {
        backgroundColor: '#2d2d50',
        padding: 10,
        marginVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3d3d60',
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        color: '#b0b0d0',
        paddingTop: 10,
        paddingBottom: 4,
    },
    title: {
        fontSize: 16,
        color: '#d0d0ff',
    }
});

export default Animacion9;
