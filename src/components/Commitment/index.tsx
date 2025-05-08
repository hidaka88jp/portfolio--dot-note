import SectionTitle from '../SectionTitle';
import CommitmentCard from '../CommitmentCard';

export default function Commitment() {
  return (
    <div className='mx-auto flex w-full max-w-96 flex-col items-center justify-center gap-10 p-5 sm:max-w-5xl sm:gap-20'>
      <SectionTitle
        title='Commitment to Comfort'
        textColor='text-primary dark:text-text-light'
      />
      <div className='flex flex-col items-center justify-center gap-10 sm:flex-row sm:justify-between'>
        <CommitmentCard
          icon='features'
          title='Simple Features'
          description='Not overloaded with features, making it easy to understand and use. Focused solely on writing and sharing.'
        />
        <CommitmentCard
          icon='documentation'
          title='Beautiful Documentation'
          description='Easy-to-read documents and a clear management interface. Simple and easy-to-understand design.'
        />
        <CommitmentCard
          icon='editor'
          title='Easy-to-Use Editor'
          description="Document creation screen comes with shortcuts for formatting. Once you get used to it, it's very smooth."
        />
      </div>
    </div>
  );
}
