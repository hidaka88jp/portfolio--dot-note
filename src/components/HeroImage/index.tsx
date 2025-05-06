import MainImage from '../../assets/main_illustration.png';

export default function HeroImage() {
  return (
    <div className='w-full max-w-56 sm:max-w-lg sm:grow'>
      <img src={MainImage} alt='MainImage' />
    </div>
  );
}
