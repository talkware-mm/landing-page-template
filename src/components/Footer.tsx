import { ExternalLink } from 'lucide-react';
import { project } from '../data/project';
import { Logo } from './Logo';
import { RouteLink } from './RouteLink';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div><a href="https://www.talkware.click" target="_blank" rel="noreferrer"><Logo inverse label="talkware" /></a><p>Built in Talkware Meetup.<br />A project pitch landing page template.</p></div>
        <div className="footer-links"><span>Project</span><a href="/#about">About</a><a href="/#how-it-works">How it works</a><RouteLink href="/demo">Demo</RouteLink></div>
        <div className="footer-links">
          <span>Talkware</span>
          <a href="https://www.talkware.click" target="_blank" rel="noreferrer">Main website</a>
          <a href="https://github.com/talkware-mm/landing-page-template" target="_blank" rel="noreferrer">Template repository</a>
          <a href="https://github.com/talkware-mm/" target="_blank" rel="noreferrer">GitHub community</a>
          <a href="mailto:team.talkware@gmail.com">team.talkware@gmail.com</a>
        </div>
      </div>
      <div className="container repo-credit-row">
        <span className="credit-label">Open-source acknowledgements</span>
        <div className="repo-credit-links">
          <a href="https://github.com/AppStack-GVN/BuildersQuickTurnStack" target="_blank" rel="noreferrer">
            With sincere gratitude to AppStack-GVN/BuildersQuickTurnStack for the foundation and inspiration that helped make this app possible. <ExternalLink size={13} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 {project.name}</span><span>Built in Talkware Meetup</span></div>
    </footer>
  );
}
