
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Teknik Destek', headerShown: false }}
      />
      <Stack.Screen
        name="ariza-listesi"
        options={{ title: 'Arıza Listesi' }}
      />
      <Stack.Screen
        name="yeni-ariza"
        options={{ title: 'Yeni Arıza Oluştur' }}
      />
      <Stack.Screen
        name="ariza/[id]"
        options={{ title: 'Arıza Detayı' }}
      />
    </Stack>
  );
}
