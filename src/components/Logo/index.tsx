import LogoLight from '../../assets/logo_light.svg';
import LogoDark from '../../assets/logo_dark.svg';

type Props = {
  isDarkMode: boolean;
};

export default function Logo({ isDarkMode }: Props) {
  return (
    <div className='w-16'>
      {isDarkMode ? (
        <img src={LogoDark} alt='Logo' className='h-auto w-full' />
      ) : (
        <img src={LogoLight} alt='Logo' className='h-auto w-full' />
      )}
    </div>
  );
}
