
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Mini Ürün Kataloğu' }}
      />
      <Stack.Screen
        name="urun/[id]"
        options={{ title: 'Ürün Detayı' }}
      />
    </Stack>
  );
}
