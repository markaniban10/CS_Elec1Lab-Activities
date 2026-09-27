import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MovieDiscovery from './MovieDiscovery';
import styles from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <MovieDiscovery />
    </SafeAreaView>
  );
}