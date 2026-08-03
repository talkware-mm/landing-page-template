import { project } from '../data/project';

export function Logo({ inverse = false, label = project.name }: { inverse?: boolean; label?: string }) {
  return (
    <span className={`logo ${inverse ? 'logo-inverse' : ''}`}>
      <img src="/logo.png" alt="" />
      <span>{label}</span>
    </span>
  );
}
