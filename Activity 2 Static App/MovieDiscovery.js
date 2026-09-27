import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';

const trending = [
  { id: '1', title: 'Spirited Away', genre: 'Fantasy', rating: '9.9' },
  { id: '2', title: 'Your Name', genre: 'Romance, Fantasy', rating: '9.7' },
  { id: '3', title: 'A Silent Voice', genre: 'Drama', rating: '9.8' },
];

const categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Anime'];

const forYou = [
  { id: '4', title: 'Quiet Harbor', genre: 'Mystery', rating: '7.6' },
  { id: '5', title: 'Paper Moons', genre: 'Romance', rating: '8.0' },
  { id: '6', title: 'Static Bloom', genre: 'Thriller', rating: '7.3' },
  { id: '7', title: 'Glasshouse', genre: 'Drama', rating: '8.6' },
];

export default function MovieDiscovery() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.greeting}>Good evening</Text>
          <Text style={styles.screenTitle}>Discover</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>R</Text>
        </View>
      </View>

      {/* Hero / Featured */}
      <View style={styles.heroCard}>
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>FEATURED</Text>
        </View>
        <Text style={styles.heroTitle}>Demon Slayer: Kimetsu no Yaiba – Infinity Castle</Text>
        <Text style={styles.heroSubtitle}>Anime • Action • Fantasy</Text>
        <View style={styles.heroFooter}>
          <Text style={styles.heroRating}>⭐ 9.5</Text>
          <View style={styles.heroButton}>
            <Text style={styles.heroButtonText}>View Details</Text>
          </View>
        </View>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryRow}>
        {categories.map((cat, i) => (
          <View
            key={cat}
            style={[styles.categoryChip, i === 0 && styles.categoryChipActive]}
          >
            <Text
              style={[
                styles.categoryChipText,
                i === 0 && styles.categoryChipTextActive,
              ]}
            >
              {cat}
            </Text>
          </View>
        ))}
      </View>

      {/* Trending */}
      <Text style={styles.sectionTitle}>Trending Now</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hScroll}>
        {trending.map((movie) => (
          <View key={movie.id} style={styles.posterCard}>
            <View style={styles.posterPlaceholder}>
              <Text style={styles.posterInitial}>{movie.title.charAt(0)}</Text>
            </View>
            <Text style={styles.posterTitle} numberOfLines={1}>{movie.title}</Text>
            <Text style={styles.posterMeta}>{movie.genre} · ⭐ {movie.rating}</Text>
          </View>
        ))}
      </ScrollView>

      {/* For You */}
      <Text style={styles.sectionTitle}>For You</Text>
      <View style={styles.listWrap}>
        {forYou.map((movie) => (
          <View key={movie.id} style={styles.listRow}>
            <View style={styles.listThumb}>
              <Text style={styles.posterInitial}>{movie.title.charAt(0)}</Text>
            </View>
            <View style={styles.listInfo}>
              <Text style={styles.listTitle}>{movie.title}</Text>
              <Text style={styles.listGenre}>{movie.genre}</Text>
            </View>
            <Text style={styles.listRating}>⭐ {movie.rating}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}