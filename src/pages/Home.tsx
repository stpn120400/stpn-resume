import Hero from '../components/Hero';

export default function Home({ onCTAClick }: { readonly onCTAClick: () => void }) {
  return <Hero onCTAClick={onCTAClick} />;
}
