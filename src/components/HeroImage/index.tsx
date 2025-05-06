import MainImage from '../../assets/main_illustration.png';

export default function HeroImage() {
  return (
    <div className='w-full max-w-56 sm:max-w-sm xl:max-w-lg'>
      <img src={MainImage} alt='MainImage' />
    </div>
  );
}
