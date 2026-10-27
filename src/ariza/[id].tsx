
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { tickets } from '../../data/tickets';
import StatusBadge from '../../components/StatusBadge';

export default function ArizaDetayScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const ticket = tickets.find((item) => item.id === id);

  if (!ticket) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Arıza bulunamadı</Text>
        <Text>Bu numarayla eşleşen bir arıza kaydı yok.</Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.id}>Arıza No: {ticket.id}</Text>

      <Text style={styles.title}>{ticket.title}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Konum</Text>
        <Text style={styles.value}>{ticket.location}</Text>

        <Text style={styles.label}>Durum</Text>
        <StatusBadge status={ticket.status} />

        <Text style={styles.label}>Açıklama</Text>
        <Text style={styles.value}>{ticket.description}</Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>← Geri Dön</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FB',
    padding: 24,
  },
  id: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#64748B',
    marginTop: 14,
    marginBottom: 6,
  },
  value: {
    fontSize: 17,
    color: '#1E293B',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
