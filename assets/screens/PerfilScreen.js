import { View, Text, Pressable, StyleSheet } from "react-native";

const PerfilScreen = ({ navigation }) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Area de usuario </Text>
            <Text style={styles.subtitulo}>Aqui puedes gestionar tus datos </Text>
            <Pressable 
                style={[styles.boton, styles.botonVerde]} 
                onPress={() => navigation.navigate('Config')}
            >
                <Text style={styles.botonTexto}>
                    Ajustes del sistema
                </Text>
            </Pressable>
        </View>
    )
}
 
export default PerfilScreen;
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
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
    botonVerde: {
        backgroundColor: '#10B981', // Verde esmeralda para diferenciar la sección
    },
    botonTexto: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});