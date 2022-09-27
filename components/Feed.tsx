import { RefreshIcon } from '@heroicons/react/outline';

const Feed = () => {
  return (
    <div>
      <div className='flex flex-center justify-between'>
        <h1>home</h1>
        <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter transition-transform duration-500 ease-out hover:rotate-180 active:scale-125' />
      </div>
    </div>
  );
};

export default Feed;
