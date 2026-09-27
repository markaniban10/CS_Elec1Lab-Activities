import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function MovieList({ movies, onToggle, onDelete }) {
  if (movies.length === 0) {
    return <Text style={styles.emptyText}>No movies yet — add one above!</Text>;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.titleTouch}
            onPress={() => onToggle(item.id)}
          >
            <Text
              style={[
                styles.titleText,
                item.watched && styles.watchedText,
              ]}
            >
              {item.watched ? '✅ ' : '🎞️ '}
              {item.title}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
