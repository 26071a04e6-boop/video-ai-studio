import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video AI Studio',
  description: 'Turn reference videos and images into polished AI-generated videos.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
