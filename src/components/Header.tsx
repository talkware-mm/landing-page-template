import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
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
        <a href="/#about" onClick={closeMenu}>About</a>
        <a href="/#how-it-works" onClick={closeMenu}>How it works</a>
        <RouteLink href="/demo" className="button button-default" onClick={closeMenu}>{project.primaryAction} <ArrowRight size={15} /></RouteLink>
      </nav>
      <Button variant="ghost" className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
    </header>
  );
}
