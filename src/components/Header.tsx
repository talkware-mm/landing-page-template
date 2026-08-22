import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { project } from '../data/project';
import { Logo } from './Logo';
import { RouteLink } from './RouteLink';
import { Button } from './ui/button';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <RouteLink href="/" aria-label={`${project.name} home`} onClick={closeMenu}><Logo /></RouteLink>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <RouteLink href="/" onClick={closeMenu}>\u1015\u1004\u103a\u1019\u1005\u102c\u1019\u103b\u1000\u103a\u1014\u103e\u102c</RouteLink>
        <a href="/#about" onClick={closeMenu}>\u101e\u102e\u1038\u1014\u103e\u1036\u1019\u103b\u102c\u1038</a>
        <a href="/#seasons" onClick={closeMenu}>\u101b\u102c\u101e\u102e\u1019\u103b\u102c\u1038</a>
        <a href="/#fertilizer" onClick={closeMenu}>\u1019\u103c\u1031\u1029\u1007\u102c</a>
        <a href="/#weather" onClick={closeMenu}>\u101b\u102c\u101e\u102e\u1025\u1010\u102f</a>
        <a href="/#books" onClick={closeMenu}>\u1005\u102c\u1021\u102f\u1015\u103a\u1019\u103b\u102c\u1038</a>
        <a href="/#about-us" onClick={closeMenu}>\u1000\u103b\u103d\u1014\u103a\u102f\u1015\u103a\u1010\u102d\u102f\u1037\u1021\u1000\u103c\u1031\u102c\u1004\u103a\u1038</a>
      </nav>
      <Button variant="ghost" className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </header>
  );
}
