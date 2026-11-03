
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import type { Product } from '../data/products';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const inStock = product.stock > 0;

  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: '/urun/[id]',
          params: { id: product.id },
        })
      }
    >
      <View style={styles.topRow}>
        <Text style={styles.category}>{product.category}</Text>

        <Text
          style={[
            styles.stock,
            { color: inStock ? '#15803D' : '#DC2626' },
          ]}
        >
          {inStock ? '● Stokta' : '● Stokta yok'}
        </Text>
      </View>

      <Text style={styles.name}>{product.name}</Text>

      <Text style={styles.price}>
        {product.price.toLocaleString('tr-TR')} ₺
      </Text>

      <Text style={styles.detail}>Detayları görüntüle →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  category: {
    color: '#2563EB',
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '600',
  },
  stock: {
    fontSize: 12,
    fontWeight: '700',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#172554',
    marginTop: 16,
  },
  price: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2563EB',
    marginTop: 8,
  },
  detail: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 12,
  },
});
