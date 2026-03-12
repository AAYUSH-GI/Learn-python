import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return <div className="card text-center"><h2 className="text-3xl font-bold">404 🐍</h2><p>Looks like this page slithered away.</p><Link to="/" className="text-brand-blue">Back home</Link></div>;
}
