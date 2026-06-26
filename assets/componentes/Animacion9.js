import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const DATA = [
    {
        title: "Entradas",
        data: [
            { name: "Bruschetta", image: 'https://picsum.photos/seed/bruschetta/60/60' },
            { name: "Calamar", image: 'https://picsum.photos/seed/calamari/60/60' },
        ]
    },
    {
        title: "Platos Fuertes",
        data: [
            { name: "Filete", image: 'https://picsum.photos/seed/steak/60/60' },
            { name: "Salmón", image: 'https://picsum.photos/seed/salmon/60/60' },
            { name: "Pasta", image: 'https://picsum.photos/seed/pasta/60/60' },
        ]
    },
];

const Animacion9 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.SectionList
                sections={DATA}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Animated.Image source={{ uri: item.image }} style={styles.thumb} />
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                scrollEnabled={false}
                style={[styles.list, {
                    opacity: animacion,
                    transform: [{
                        translateX: animacion.interpolate({
                            inputRange: [0, 1],
                            outputRange: [200, 0]
                        })
                    }]
                }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    list: {
        width: '100%',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2a2a44',
        padding: 10,
        marginVertical: 4,
        borderRadius: 12,
    },
    thumb: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#d0d0ff',
        marginLeft: 12,
    },
    header: {
        fontSize: 16,
        fontWeight: '700',
        color: '#8888cc',
        paddingTop: 12,
        paddingBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});

export default Animacion9;
