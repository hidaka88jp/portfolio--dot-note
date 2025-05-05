import { Helmet } from 'react-helmet';

type Props = {
  isDarkMode: boolean;
};

export default function AppMetaTags({ isDarkMode }: Props) {
  return (
    <Helmet>
      <title>.note</title>
      <meta name='theme-color' content={isDarkMode ? '#3B523A' : '#F3F4EC'} />
      <meta name='description' content='awesome note app' />
    </Helmet>
  );
}
