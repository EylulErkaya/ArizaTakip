
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import type { Ticket } from '../data/tickets';
import StatusBadge from './StatusBadge';

type Props = {
  ticket: Ticket;
};

export default function TicketCard({ ticket }: Props) {
  return (
    <Pressable
            style={styles.card}
            onPress={() =>
        router.push({
            pathname: '/ariza/[id]' as const,
            params: { id: ticket.id },
        })
        }
    >
      <View style={styles.row}>
        <Text style={styles.id}>#{ticket.id}</Text>
        <StatusBadge status={ticket.status} />
      </View>

      <Text style={styles.title}>{ticket.title}</Text>
      <Text style={styles.location}>📍 {ticket.location}</Text>
      <Text style={styles.detail}>Detayları görmek için dokun →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  id: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 12,
  },
  location: {
    color: '#64748B',
    marginTop: 8,
  },
  detail: {
    color: '#2563EB',
    marginTop: 12,
    fontSize: 13,
  },
});
