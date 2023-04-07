import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';

const TweetBox = () => {
  const [input, setInput] = useState<string>('');

  return (
    <div className='flex space-x-2 p-5'>
      <img
        className='h-14 w-14 rounded-full object-cover mt-4'
        src='https://links.papareact.com/gll'
        alt='Profile image'
      />
      <div className='flex flex-1 items-center pl-2'>
        <form action='send' className='flex flex-1 flex-col'>
          <input
            className='h-24 w-full text-xl outline-none placeholder:text-xl'
            type='text'
            placeholder="What's happening?"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <div className='flex items-center justify-between'>
            <div className='flex space-x-2 text-twitter'>
              <CalendarIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
              <EmojiHappyIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
              <LocationMarkerIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
              <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
              <SearchCircleIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
            </div>
            <button
              disabled={!input}
              className='bg-twitter px-5 py-2 rounded-full text-white font-bold disabled:opacity-40'
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
