import { SearchIcon } from '@heroicons/react/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Widgets = () => {
  return (
    <div className='mt-2 px-2 col-span-2 hidden lg:inline-block'>
      {/* Search */}
      <div className='my-2 p-3 flex items-center space-x-2 bg-gray-100 rounded-full'>
        <SearchIcon className='h-5 w-5 text-gray-400' />
        <input
          type='text'
          placeholder='Search'
          className='bg-transparent outline-none'
        />
      </div>

      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='ElonMusk'
        options={{ height: 1000 }}
      />
    </div>
  );
};

export default Widgets;
