module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        accent: '#22c55e',
        dark: '#0f172a',
        panel: '#111827'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,58,237,0.4), 0 20px 45px rgba(124,58,237,0.35)'
      }
    }
  },
  plugins: []
};
