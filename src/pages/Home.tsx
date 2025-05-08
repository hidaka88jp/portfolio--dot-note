import Hero from '../components/Hero';
import Commitment from '../components/Commitment';
import FAQ from '../components/FAQ';

type Props = {
  isDarkMode: boolean;
};

export default function Home({ isDarkMode }: Props) {
  return (
    <div className='flex flex-col gap-10'>
      <Hero isDarkMode={isDarkMode} />
      <Commitment />
      <FAQ />
    </div>
  );
}
