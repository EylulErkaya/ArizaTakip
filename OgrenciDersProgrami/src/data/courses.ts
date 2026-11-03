
export type Course = {
  id: string;
  name: string;
  day: string;
  time: string;
  classroom: string;
  instructor: string;
};

export const courses: Course[] = [
  {
    id: 'd1',
    name: 'Mobil Programlama',
    day: 'Salı',
    time: '09.00',
    classroom: 'Lab 2',
    instructor: 'Dr. Öğr. Üyesi Ayşe Yılmaz',
  },
  {
    id: 'd2',
    name: 'JavaScript',
    day: 'Çarşamba',
    time: '13.00',
    classroom: 'Lab 1',
    instructor: 'Dr. Öğr. Üyesi Mehmet Demir',
  },
  {
    id: 'd3',
    name: 'Web Tasarımı',
    day: 'Perşembe',
    time: '10.00',
    classroom: 'Derslik 3',
    instructor: 'Öğr. Gör. Zeynep Kaya',
  },
  {
    id: 'd4',
    name: 'Veritabanı',
    day: 'Cuma',
    time: '11.00',
    classroom: 'Lab 4',
    instructor: 'Dr. Öğr. Üyesi Ahmet Çelik',
  },
];
