import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import type { FormEvent } from 'react';
import { RouteLink } from '../components/RouteLink';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export function DemoPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <div className="demo-page">
      <section className="demo-hero section-border">
        <div className="container">
          <RouteLink href="/" className="back-link"><ArrowLeft size={15} /> Back to overview</RouteLink>
          <Badge>Project demo</Badge>
          <h1>Show the product,<br />not another paragraph.</h1>
          <p>Use this route for a live product, interactive prototype, walkthrough video, or focused proof of concept.</p>
        </div>
      </section>

      <section className="demo-content section-border">
        <div className="container">
          <div className="demo-frame">
            <div className="demo-toolbar"><span></span><span></span><span></span><small>your-project-demo.com</small></div>
            <button className="demo-play" type="button" aria-label="Play project demo"><Play size={24} fill="currentColor" /></button>
            <p>Embed your project demo or video here</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div><Badge>Contact the team</Badge><h2>Interested in the project?</h2><p>Use this section for feedback, early access requests, partnerships, or questions after the pitch.</p></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name<input name="name" placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
            <label>Message<textarea name="message" rows={5} placeholder="Tell us what you think..." /></label>
            <Button type="submit">Send message <ArrowRight size={15} /></Button>
          </form>
        </div>
      </section>
    </div>
  );
}
