
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Öğrenci Ders Programı',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ders/[id]"
        options={{
          title: 'Ders Detayı',
        }}
      />
    </Stack>
  );
}
