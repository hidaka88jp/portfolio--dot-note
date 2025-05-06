import Hero from '../components/Hero';

type Props = {
  isDarkMode: boolean;
};

export default function Home({ isDarkMode }: Props) {
  return (
    <>
      <Hero isDarkMode={isDarkMode} />
    </>
  );
}
