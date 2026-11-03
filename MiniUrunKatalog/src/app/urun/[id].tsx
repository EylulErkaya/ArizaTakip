
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { products } from '../../data/products';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>Ürün bulunamadı</Text>
        <Text style={styles.description}>
          Bu numarayla eşleşen bir ürün kaydı bulunamadı.
        </Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>← Ürünlere Dön</Text>
        </Pressable>
      </View>
    );
  }

  const inStock = product.stock > 0;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.eyebrow}>ÜRÜN DETAYI</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>
        {product.price.toLocaleString('tr-TR')} ₺
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Ürün açıklaması</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.label}>Stok durumu</Text>
        <Text
          style={[
            styles.stock,
            { color: inStock ? '#15803D' : '#DC2626' },
          ]}
        >
          {inStock ? 'Stokta' : 'Stokta yok'}
        </Text>

        <Text style={styles.stockCount}>
          Stok miktarı: {product.stock} adet
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>← Ürün Listesine Dön</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3F6FB',
  },
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 32,
  },
  eyebrow: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 16,
  },
  category: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#172554',
  },
  price: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2563EB',
    marginTop: 12,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#64748B',
    marginTop: 10,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 24,
  },
  stock: {
    fontSize: 16,
    fontWeight: '800',
  },
  stockCount: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 8,
  },
  errorTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#DC2626',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
