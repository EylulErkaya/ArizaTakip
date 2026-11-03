
import { router, useLocalSearchParams } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { courses } from '../../data/courses';

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const course = courses.find((item) => item.id === id);

  // Hatalı ders ID kontrolü
  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>Ders bulunamadı!</Text>

        <Text style={styles.description}>
          Bu ID ile eşleşen bir ders kaydı bulunmuyor.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.buttonText}>
            ← Ders Programına Dön
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.eyebrow}>DERS BİLGİLERİ</Text>

      <Text style={styles.title}>{course.name}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Ders Kodu</Text>
        <Text style={styles.value}>{course.id}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Ders Adı</Text>
        <Text style={styles.value}>{course.name}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Gün</Text>
        <Text style={styles.value}>{course.day}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Saat</Text>
        <Text style={styles.value}>{course.time}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Sınıf</Text>
        <Text style={styles.value}>{course.classroom}</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Öğretim Elemanı</Text>
        <Text style={styles.value}>{course.instructor}</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.buttonText}>
          ← Ders Programına Dön
        </Text>
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
    backgroundColor: '#F3F6FB',
    padding: 24,
    paddingTop: 32,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#2563EB',
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#172554',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#64748B',
    marginBottom: 6,
  },
  value: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1E293B',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
    marginBottom: 20,
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
