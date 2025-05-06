import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  children: React.ReactNode;
  path: string;
};

export default function LinkButton({ children, path }: Props) {
  return (
    <Link
      to={path}
      className='bg-primary dark:bg-secondary text-text-light relative flex w-44 max-w-full cursor-pointer items-center justify-center rounded-md px-2 py-3 font-semibold select-none hover:opacity-90 focus:opacity-90'
    >
      {children}
      <FaArrowRight className='absolute top-1/2 right-3 h-3.5 w-3.5 -translate-y-1/2' />
    </Link>
  );
}
