import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Chandigarh VIP Area Mein Kothi | Luxury Properties',
  description: 'Chandigarh ke VIP area mein kothi ke options explore karein. Prime location, luxury residential properties aur premium kothi ke liye details dekhein.',
  openGraph: {
    title: 'Chandigarh VIP Area Mein Kothi | Luxury Properties',
    description: 'Chandigarh ke VIP area mein kothi ke options explore karein. Prime location, luxury residential properties aur premium kothi ke liye details dekhein.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandigarh VIP Area Mein Kothi | Luxury Properties',
    description: 'Chandigarh ke VIP area mein kothi ke options explore karein. Prime location, luxury residential properties aur premium kothi ke liye details dekhein.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="overflow-x-hidden">{children}</body>
    </html>
  );
}
