import type { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      <main id="top">{children}</main>
      <Footer />
    </div>
  );
}
