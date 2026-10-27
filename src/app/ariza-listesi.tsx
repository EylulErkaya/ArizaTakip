
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { tickets } from '../data/tickets';
import TicketCard from '../components/TicketCard';

export default function ArizaListesiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arıza Listesi</Text>

      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TicketCard ticket={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FB',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 20,
  },
});
