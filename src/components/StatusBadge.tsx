
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  status: 'Bekliyor' | 'İşlemde' | 'Çözüldü';
};

const colors = {
  Bekliyor: { background: '#FFEDD5', text: '#C2410C' },
  İşlemde: { background: '#DBEAFE', text: '#1D4ED8' },
  Çözüldü: { background: '#DCFCE7', text: '#15803D' },
};

export default function StatusBadge({ status }: Props) {
  return (
    <View style={[styles.badge, { backgroundColor: colors[status].background }]}>
      <Text style={[styles.text, { color: colors[status].text }]}>
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
