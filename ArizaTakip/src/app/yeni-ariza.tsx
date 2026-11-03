
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

export default function YeniArizaScreen() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    if (!title.trim() || !location.trim()) {
      Alert.alert('Eksik bilgi', 'Başlık ve konum alanlarını doldur.');
      return;
    }

    Alert.alert('Başarılı', 'Arıza formu kontrol edildi.');
    router.back();
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yeni Arıza Oluştur</Text>

      <Text style={styles.label}>Arıza başlığı</Text>
      <TextInput
        style={styles.input}
        placeholder="Örn. Bilgisayar açılmıyor"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Konum</Text>
      <TextInput
        style={styles.input}
        placeholder="Örn. Bilgisayar Laboratuvarı"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.label}>Açıklama</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Arızayı açıklayın"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Arıza Kaydını Kontrol Et</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Geri Dön</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F6FB',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#334155',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
    fontSize: 15,
  },
  textArea: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  backButton: {
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  backText: {
    color: '#2563EB',
    fontWeight: '600',
  },
});
