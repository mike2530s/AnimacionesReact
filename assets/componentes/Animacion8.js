import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';

const data = [
    { id: '1', title: 'Puente Golden Gate', image: 'https://picsum.photos/seed/bridge/60/60' },
    { id: '2', title: 'Aurora Boreal', image: 'https://picsum.photos/seed/aurora/60/60' },
    { id: '3', title: 'Temporada de Sakura', image: 'https://picsum.photos/seed/sakura/60/60' },
];

const Animacion8 = () => {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.spring(animacion, {
            toValue: 1,
            friction: 5,
            tension: 30,
            useNativeDriver: true
        }).start();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Animated.Image source={{ uri: item.image }} style={styles.thumb} />
            <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSub}>Toca para explorar</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                style={[styles.list, {
                    opacity: animacion,
                    transform: [{
                        scale: animacion.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.8, 1]
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
        padding: 12,
        marginVertical: 5,
        borderRadius: 14,
    },
    thumb: {
        width: 50,
        height: 50,
        borderRadius: 12,
    },
    itemContent: {
        marginLeft: 12,
        flex: 1,
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#e0e0ff',
    },
    itemSub: {
        fontSize: 12,
        color: '#7070a0',
        marginTop: 2,
    },
});

export default Animacion8;
