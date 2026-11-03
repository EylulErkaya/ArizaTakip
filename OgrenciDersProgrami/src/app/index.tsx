
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

const days = ['Tümü', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];

export default function HomeScreen() {
  const [selectedDay, setSelectedDay] = useState('Tümü');

  const filteredCourses =
    selectedDay === 'Tümü'
      ? courses
      : courses.filter((course) => course.day === selectedDay);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>ÖĞRENCİ PANELİ</Text>
        <Text style={styles.title}>Ders Programım</Text>
        <Text style={styles.subtitle}>
          Haftalık derslerini kolayca takip et.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Güne Göre Filtrele</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
        contentContainerStyle={styles.filterContainer}
      >
        {days.map((day) => (
          <Pressable
            key={day}
            onPress={() => setSelectedDay(day)}
            style={[
              styles.filterButton,
              selectedDay === day && styles.activeFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selectedDay === day && styles.activeFilterText,
              ]}
            >
              {day}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>Derslerim</Text>
        <Text style={styles.count}>
          {filteredCourses.length} ders
        </Text>
      </View>

      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Ders bulunamadı</Text>
            <Text style={styles.emptyText}>
              Seçilen gün için kayıtlı ders bulunmuyor.
            </Text>
          </View>
        }
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
  header: {
    marginBottom: 28,
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
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E293B',
  },
  filterScroll: {
    flexGrow: 0,
    marginTop: 14,
    marginBottom: 24,
  },
  filterContainer: {
    gap: 8,
    paddingRight: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  activeFilter: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  filterText: {
    color: '#475569',
    fontSize: 13,
    fontWeight: '600',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  count: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
  },
  list: {
    paddingBottom: 30,
  },
  emptyContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    marginTop: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#172554',
  },
  emptyText: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
    textAlign: 'center',
  },
});
