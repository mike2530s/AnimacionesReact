import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import Animacion1 from './assets/componentes/Animacion1';
import Animacion2 from './assets/componentes/Animacion2';
import Animacion3 from './assets/componentes/Animacion3';
import Animacion4 from './assets/componentes/Animacion4';
import Animacion5 from './assets/componentes/Animacion5';
import Animacion6 from './assets/componentes/Animacion6';
import Animacion7 from './assets/componentes/Animacion7';
import Animacion8 from './assets/componentes/Animacion8';
import Animacion9 from './assets/componentes/Animacion9';

const SECTIONS = [
  { title: 'Opacidad', description: 'Animated.timing - Fade in', component: Animacion1 },
  { title: 'Escalado', description: 'Animated.timing - Crecimiento progresivo', component: Animacion2 },
  { title: 'Tipografía', description: 'Animated.timing - Tamaño de texto', component: Animacion3 },
  { title: 'Rotación', description: 'Animated.timing con interpolate', component: Animacion4 },
  { title: 'Botón', description: 'Animated.spring - Presión con rebote', component: Animacion5 },
  { title: 'Animated.Image', description: 'Animated.spring - Imagen con rebote', component: Animacion6 },
  { title: 'Animated.ScrollView', description: 'Animated.timing - Desplazamiento vertical', component: Animacion7 },
  { title: 'Animated.FlatList', description: 'Animated.spring - Lista con escala', component: Animacion8 },
  { title: 'Animated.SectionList', description: 'Animated.timing - Slide desde derecha', component: Animacion9 },
];

export default function App() {
  const [playCount, setPlayCount] = useState(Array(9).fill(0));

  const handlePlay = (index) => {
    setPlayCount(prev => {
      const next = [...prev];
      next[index] += 1;
      return next;
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Animation Lab</Text>
        <Text style={styles.headerSubtitle}>React Native Animation Showcase</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {SECTIONS.map(({ title, description, component: Component }, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderInfo}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
              </View>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => handlePlay(index)}
                activeOpacity={0.7}
              >
                <Text style={styles.playButtonText}>▶</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardBody}>
              {playCount[index] > 0 && <Component key={playCount[index]} />}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f0f1a',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a40',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#e0e0ff',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#8888aa',
    marginTop: 4,
    letterSpacing: 0.3,
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1e1e32',
    borderRadius: 14,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2a2a44',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a44',
  },
  cardHeaderInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#d0d0ff',
    letterSpacing: 0.3,
  },
  cardDescription: {
    fontSize: 12,
    color: '#7070a0',
    marginTop: 3,
    letterSpacing: 0.2,
  },
  cardBody: {
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6c63ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 2,
  },
});
