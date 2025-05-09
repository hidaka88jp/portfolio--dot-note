import Logo from '../Logo';
import ModeButton from '../ModeButton';
import { Link } from 'react-router';

type Props = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Header({ isDarkMode, toggleDarkMode }: Props) {
  return (
    <>
      <div className='bg-bg-top-light dark:bg-bg-top-dark'>
        <div className='mx-auto -mb-[1px] flex w-full max-w-96 items-center justify-between p-5 sm:max-w-5xl'>
          <Link to='/'>
            <Logo isDarkMode={isDarkMode} />
          </Link>
          <ModeButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </>
  );
}
