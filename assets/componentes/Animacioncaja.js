import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default function Animacioncaja() {
    const [desplazamientoY] = useState(new Animated.Value(0));
    const [escala] = useState(new Animated.Value(1));

    useEffect(() => {
        const animacion = Animated.sequence([
            // 1. Desciende de forma fluida verticalmente
            Animated.timing(desplazamientoY, {
                toValue: 80, 
                duration: 1000,
                useNativeDriver: false,
            }),
            // 2. Se expande masivamente (10 veces) con rebote elástico
            Animated.spring(escala, {
                toValue: 10,
                friction: 2, // Hace que rebote (más bajo = más rebote)
                tension: 60,
                useNativeDriver: false,
            }),
            // 3. Recupera su escala original
            Animated.timing(escala, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }),
            // 4. Continúa su descenso de manera lineal
            Animated.timing(desplazamientoY, {
                toValue: 220, 
                duration: 1000,
                useNativeDriver: false,
            })
        ]);

        animacion.start();

        return () => animacion.stop(); // Limpiar la animación al desmontar
    }, []);

    const estilosAnimados = {
        transform: [
            { translateY: desplazamientoY },
            { scale: escala }
        ]
    };

    return (
        <View style={styles.contenedor}>
            <Animated.View style={[styles.cajaAzul, estilosAnimados]} />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        width: 150,
        height: 250, // Mucho espacio para que la caja baje y se expanda sin cortarse
        alignItems: 'center', 
    },
    cajaAzul: {
        width: 10,
        height: 10,
        backgroundColor: 'blue',
    }
});
