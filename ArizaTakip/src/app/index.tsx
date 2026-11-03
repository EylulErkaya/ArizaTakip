
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>🛠️</Text>
        <Text style={styles.title}>Teknik Destek</Text>
        <Text style={styles.subtitle}>
          Arıza takip sistemine hoş geldin.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Arıza Takip Merkezi</Text>
        <Text style={styles.description}>
          Arızaları görüntüleyebilir ve yeni arıza kaydı oluşturabilirsin.
        </Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => {
            console.log('Arıza Listesi butonuna basıldı');
            router.push('/ariza-listesi');
          }}
        >
          <Text style={styles.primaryButtonText}>Arıza Listesi</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push('/yeni-ariza')}
        >
          <Text style={styles.secondaryButtonText}>+ Yeni Arıza Oluştur</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        Mobil Programlama • Ariza Takip
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FB',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172554',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 10,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },
  description: {
    color: '#64748B',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#E2E8F0',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#1E293B',
    fontSize: 15,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    marginTop: 28,
    fontSize: 12,
  },
});
