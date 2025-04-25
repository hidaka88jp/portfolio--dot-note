import LogoImage from '../../assets/logo.svg';

export default function Logo() {
  return (
    <>
      <div>
        <img src={LogoImage} alt='logo' className='w-16' />
      </div>
    </>
  );
}
