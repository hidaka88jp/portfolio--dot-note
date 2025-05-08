import FeaturesIcon from '../../assets/commitment-icon-features.svg';
import DocumentationIcon from '../../assets/commitment-icon-documentation.svg';
import EditorIcon from '../../assets/commitment-icon-editor.svg';

type Props = {
  icon: 'features' | 'documentation' | 'editor';
  title: string;
  description: string;
};

export default function CommitmentCard({ icon, title, description }: Props) {
  const iconSrc = {
    features: FeaturesIcon,
    documentation: DocumentationIcon,
    editor: EditorIcon,
  }[icon];

  return (
    <div className='text-primary dark:text-text-light flex w-full max-w-72 flex-col items-center justify-center gap-4'>
      <div className='bg-icon-bg-light flex h-14 w-14 items-center justify-center rounded-full'>
        <img src={iconSrc} alt='Features' />
      </div>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-center text-sm'>{description}</p>
    </div>
  );
}
