import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#12121f',
  },
  container: {
    flex: 1,
    backgroundColor: '#12121f',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    color: '#8a8aa3',
    fontSize: 13,
  },
  screenTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#e94560',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  heroCard: {
    backgroundColor: '#1c1c33',
    borderRadius: 18,
    padding: 20,
    marginBottom: 26,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e94560',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 10,
  },
  heroBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  heroSubtitle: {
    color: '#9494b8',
    fontSize: 13,
    marginBottom: 16,
  },
  heroFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroRating: {
    color: '#ffd166',
    fontSize: 14,
    fontWeight: '600',
  },
  heroButton: {
    backgroundColor: '#e94560',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  heroButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 4,
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 26,
  },
  categoryChip: {
    backgroundColor: '#1c1c33',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryChipActive: {
    backgroundColor: '#e94560',
  },
  categoryChipText: {
    color: '#9494b8',
    fontSize: 13,
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: '#fff',
  },
  hScroll: {
    marginBottom: 26,
  },
  posterCard: {
    width: 120,
    marginRight: 14,
  },
  posterPlaceholder: {
    width: 120,
    height: 170,
    borderRadius: 14,
    backgroundColor: '#26264a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  posterInitial: {
    color: '#5c5c8a',
    fontSize: 36,
    fontWeight: '700',
  },
  posterTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  posterMeta: {
    color: '#8a8aa3',
    fontSize: 11,
    marginTop: 2,
  },
  listWrap: {
    marginBottom: 10,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c33',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  listThumb: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#26264a',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listInfo: {
    flex: 1,
  },
  listTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  listGenre: {
    color: '#8a8aa3',
    fontSize: 12,
    marginTop: 2,
  },
  listRating: {
    color: '#ffd166',
    fontSize: 13,
    fontWeight: '600',
  },
});