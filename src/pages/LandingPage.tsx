import { ArrowRight, Layers3, Lightbulb, Rocket, Search, Target, TrendingUp, Wrench } from 'lucide-react';
import { RouteLink } from '../components/RouteLink';
import { Badge } from '../components/ui/badge';
import { ButtonLink } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { project } from '../data/project';

const features = [
  { icon: Target, title: 'Focused on the problem', description: 'Explain the real user problem your project addresses and why current options fall short.' },
  { icon: Layers3, title: 'Simple by design', description: 'Show how the project turns a complicated task into a clear, approachable experience.' },
  { icon: TrendingUp, title: 'Built for outcomes', description: 'Describe the meaningful result users get—not only the features they receive.' },
];

const steps = [
  { icon: Search, label: 'Step 01', value: 'Understand', note: 'Start with the user, their context, and the job they need to complete.' },
  { icon: Wrench, label: 'Step 02', value: 'Create', note: 'Turn the strongest insight into a focused product people can actually use.' },
  { icon: Rocket, label: 'Step 03', value: 'Improve', note: 'Learn from real feedback and make each version more valuable than the last.' },
];

export function LandingPage() {
  return (
    <>
      <section className="hero section-border">
        <div className="container hero-inner">
          <Badge>{project.category} · Built in Talkware Meetup</Badge>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="hero-actions">
            <RouteLink href={project.primaryUrl} className="button button-default">{project.primaryAction} <ArrowRight size={16} /></RouteLink>
            <ButtonLink href="#how-it-works" variant="outline">{project.secondaryAction}</ButtonLink>
          </div>
          <div className="hero-meta" aria-label="Project pitch outline">
            <span><Target size={15} /> 01 · A real problem</span>
            <span><Lightbulb size={15} /> 02 · A focused idea</span>
            <span><TrendingUp size={15} /> 03 · A useful outcome</span>
          </div>
        </div>
      </section>

      <section className="features section-border muted-section" id="about">
        <div className="container">
          <div className="section-heading"><Badge>Why this project</Badge><h2>Show people why<br />your idea matters.</h2><p>Use these cards for the three strongest reasons someone should understand, trust, or try your project.</p></div>
          <div className="card-grid">
            {features.map(({ icon: Icon, title, description }, index) => (
              <Card key={title}><CardHeader><span className="icon-box"><Icon size={20} /></span><span className="card-number">0{index + 1}</span></CardHeader><CardContent><h3>{title}</h3><p>{description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="details section-border" id="how-it-works">
        <div className="container">
          <div className="section-heading compact-heading"><Badge>How it works</Badge><h2>Make the journey feel obvious.</h2></div>
          <div className="card-grid">
            {steps.map(({ icon: Icon, label, value, note }) => (
              <Card key={label} className="detail-card"><CardHeader><span className="icon-box"><Icon size={20} /></span><span className="detail-label">{label}</span></CardHeader><CardContent><h3>{value}</h3><p>{note}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="register section-border" id="demo">
        <div className="container">
          <div className="register-panel">
            <div><Badge>Ready when you are</Badge><h2>Give the project a clear next step.</h2><p>Close the pitch with one action: open the demo, join the waitlist, start a trial, or contact the team.</p></div>
            <RouteLink href="/demo" className="button button-inverse">Launch the project <ArrowRight size={16} /></RouteLink>
          </div>
        </div>
      </section>
    </>
  );
}
