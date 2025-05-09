import Hero from '../components/Hero';
import Commitment from '../components/Commitment';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <Hero />
      <Commitment />
      <FAQ />
    </div>
  );
}
