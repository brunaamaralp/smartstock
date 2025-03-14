/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lucractive: {
          // Cores principais
          primary: '#f3f9ff',
          accent: '#00f7a6',
          link: '#3458f7',
          hover: '#00bfd1',
          text: '#022939',
          
          // Status e indicadores
          success: '#10b981',
          warning: '#f59e0b',
          danger: '#ef4444',
          info: '#3b82f6',
          
          // Tons neutros
          surface: '#ffffff',
          border: '#e5e7eb',
          muted: '#6b7280',
          
          // Tons de destaque
          highlight: '#00f7a6',
          chart: {
            primary: '#3458f7',
            secondary: '#00f7a6',
            tertiary: '#00bfd1',
            quaternary: '#ef4444',
          },
        },
      },
      fontSize: {
        'card-title': '18px',
        'card-body': '14px',
      },
      lineHeight: {
        'card-body': '1.5',
      },
      spacing: {
        'card': '24px',
      },
    },
  },
  plugins: [],
};