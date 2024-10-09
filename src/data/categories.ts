import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Antivirus',
    products: [
      {
        id: 1,
        name: 'SuperGuard Pro',
        description: 'Protección avanzada contra virus y malware.',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'SecureShield',
        description: 'Escudo completo para tu sistema contra amenazas en línea.',
        image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 2,
    name: 'Office',
    products: [
      {
        id: 3,
        name: 'ProductiveSuite',
        description: 'Paquete completo de herramientas de oficina.',
        image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'DocumentMaster',
        description: 'Procesador de texto avanzado con colaboración en tiempo real.',
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 3,
    name: 'Nube',
    products: [
      {
        id: 5,
        name: 'CloudStore',
        description: 'Almacenamiento en la nube seguro y escalable.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'SyncPro',
        description: 'Sincronización automática de archivos entre dispositivos.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  // Añade más categorías y productos aquí...
];