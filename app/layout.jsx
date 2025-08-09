import '../assets/styles/globals.css';

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
    <html lang="en">
      <body className={inconsolata.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
