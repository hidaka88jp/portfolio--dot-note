import Logo from '../Logo';
import ModeButton from '../ModeButton';

export default function Header() {
  return (
    <>
      <div className='bg-bg-top-light'>
        <div className='mx-auto flex w-full max-w-96 items-center justify-between p-5 sm:max-w-3xl xl:max-w-5xl'>
          <Logo />
          <ModeButton />
        </div>
      </div>
    </>
  );
}
