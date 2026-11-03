
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import type { Course } from '../data/courses';

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: '/ders/[id]',
          params: { id: course.id },
        })
      }
    >
      <View style={styles.topRow}>
        <Text style={styles.day}>{course.day}</Text>
        <Text style={styles.time}>{course.time}</Text>
      </View>

      <Text style={styles.name}>{course.name}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.classroom}>📍 {course.classroom}</Text>
      </View>

      <Text style={styles.detail}>Ders detaylarını görüntüle →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  day: {
    backgroundColor: '#DBEAFE',
    color: '#1D4ED8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    fontSize: 13,
    fontWeight: '700',
  },
  time: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '600',
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: '#172554',
    marginTop: 16,
  },
  infoRow: {
    marginTop: 12,
  },
  classroom: {
    fontSize: 14,
    color: '#475569',
  },
  detail: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
    marginTop: 16,
  },
});
