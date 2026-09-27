import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import MovieList from './MovieList';
import styles from './styles';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');

  const addMovie = () => {
    if (input.trim() === '') return;
    const newMovie = {
      id: Date.now().toString(),
      title: input.trim(),
      watched: false,
    };
    setMovies((prev) => [...prev, newMovie]);
    setInput('');
  };

  const toggleWatched = (id) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.header}>🎬 Movie Wishlist</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add a movie title..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addMovie}
        />
        <TouchableOpacity style={styles.addButton} onPress={addMovie}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <MovieList
        movies={movies}
        onToggle={toggleWatched}
        onDelete={deleteMovie}
      />
    </KeyboardAvoidingView>
  );
}
