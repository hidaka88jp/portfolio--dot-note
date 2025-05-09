import { MdOutlineSettings } from 'react-icons/md';
import { CgFileDocument } from 'react-icons/cg';
import { BiSolidEdit } from 'react-icons/bi';

type Props = {
  icon: 'features' | 'documentation' | 'editor';
  title: string;
  description: string;
};

export default function CommitmentCard({ icon, title, description }: Props) {
  const IconComponent = {
    features: MdOutlineSettings,
    documentation: CgFileDocument,
    editor: BiSolidEdit,
  }[icon];

  return (
    <div className='text-primary dark:text-text-light flex w-full max-w-72 flex-col items-center justify-center gap-4'>
      <div className='bg-icon-bg-light flex h-14 w-14 items-center justify-center rounded-full'>
        <IconComponent className='text-secondary h-8 w-8' />
      </div>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='text-center text-sm'>{description}</p>
    </div>
  );
}
