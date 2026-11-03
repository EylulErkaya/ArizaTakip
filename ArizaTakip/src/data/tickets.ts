
export type Ticket = {
  id: string;
  title: string;
  location: string;
  status: 'Bekliyor' | 'İşlemde' | 'Çözüldü';
  description: string;
};

export const tickets: Ticket[] = [
  {
    id: '101',
    title: 'Bilgisayar açılmıyor',
    location: 'Bilgisayar Laboratuvarı',
    status: 'Bekliyor',
    description: 'Bilgisayar güç düğmesine basıldığında açılmıyor.',
  },
  {
    id: '102',
    title: 'İnternet bağlantısı yok',
    location: 'Kütüphane',
    status: 'İşlemde',
    description: 'Bilgisayar internete bağlanamıyor.',
  },
  {
    id: '103',
    title: 'Yazıcı çalışmıyor',
    location: 'Öğrenci İşleri',
    status: 'Çözüldü',
    description: 'Yazıcının bağlantı sorunu giderildi.',
  },
];
