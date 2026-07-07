import { StyleSheet, Text, View, Pressable } from "react-native";

const ConfigScreen = ({ navigation }) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Configuracion general </Text>
            <Text style={styles.subtitulo}>Modificaciones internas  del sistema</Text>
            <Pressable
                style={[styles.boton, styles.botonGris]}
                onPress={() => navigation.popToTop()}
            >
                <Text style={styles.botonTexto}>
                    Salir y volver al inicio
                </Text>
            </Pressable>
        </View>
    )
}
export default ConfigScreen; 
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        padding: 20
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 16,
        color: '#475569',
        marginBottom: 30,
        textAlign: 'center'
    },
    boton: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 10,
    },
    botonGris: {
        backgroundColor: '#64748B', // Gris para el botón de salida / cierre
    },
    botonTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});