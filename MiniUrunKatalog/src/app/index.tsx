
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>TEKNOLOJİ MAĞAZASI</Text>
      <Text style={styles.title}>Ürün Kataloğu</Text>
      <Text style={styles.description}>
        İhtiyacına uygun teknoloji ürünlerini keşfet.
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FB',
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#2563EB',
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#172554',
  },
  description: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 8,
    marginBottom: 24,
  },
  list: {
    paddingBottom: 24,
  },
});
