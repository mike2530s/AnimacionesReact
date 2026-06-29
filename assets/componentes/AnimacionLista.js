import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function AnimacionLista() {
    // Animacion1 controla el eje Y (Arriba/Abajo)
    const [Animacion1, setAnimacion1] = useState(new Animated.Value(0));
    // Animacion2 controla el eje X (Izquierda/Derecha)
    const [Animacion2, setAnimacion2] = useState(new Animated.Value(0));

    useEffect(() => {
        const animacion = Animated.loop(
            Animated.sequence([
                // 1. Mover a la derecha
                Animated.timing(Animacion2, {
                    toValue: 100,
                    duration: 500,
                    useNativeDriver: false,
                }),
                // 2. Mover hacia abajo
                Animated.timing(Animacion1, {
                    toValue: 100,
                    duration: 500,
                    useNativeDriver: false,
                }),
                // 3. Mover a la izquierda (regresa a 0)
                Animated.timing(Animacion2, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }),
                // 4. Mover hacia arriba (regresa a 0)
                Animated.timing(Animacion1, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ])
        );
        animacion.start();

        return () => animacion.stop(); // Limpieza al desmontar
    }, [])
    const estiloAnimacion = {
        transform: [
            { translateY: Animacion1 },
            { translateX: Animacion2 }
        ]
    }

    return (
        <View style={styles.contenedorEspacio}>
            <Animated.View style={[styles.cuadrado, estiloAnimacion]} />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorEspacio: {
        width: 120,
        height: 120,
        // backgroundColor: 'rgba(255, 255, 255, 0.05)', // Opcional, para ver el área
    },
    cuadrado: {
        width: 20,
        height: 20,
        backgroundColor: 'cornflowerblue',
        borderRadius: 4, // Un toque extra de estilo
    }
})