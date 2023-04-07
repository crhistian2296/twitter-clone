import { RefreshIcon } from '@heroicons/react/outline';
import TweetBox from './TweetBox';

const Feed = () => {
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
      <div className='flex items-center justify-between p-4'>
        <h1 className='text-xl'>Home</h1>
        <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter transition-transform duration-500 ease-out hover:rotate-180 active:scale-125' />
      </div>

      {/* Tweetbox */}
      <div>
        <TweetBox />
      </div>
    </div>
  );
};

export default Feed;
