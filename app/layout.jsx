import '../assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import AuthProvider from '@/components/AuthProvider';

import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'], // choose the weights you need
});

export const metadata = {
  title: 'Property Pulse Nextjs',
  description: 'Find the perfect rental property with Property Pulse Nextjs',
  keywords: 'property, pulse, nextjs, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inconsolata.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
