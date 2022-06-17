import {
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div>
      <img
        className='h-10 w-10'
        src='https://links.papareact.com/drq'
        alt='twitter-icon'
      />
      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notifications' />
      <SidebarRow Icon={MailIcon} title='Messages' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
      <SidebarRow Icon={CollectionIcon} title='List' />
      <SidebarRow Icon={UserIcon} title='Sign' />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
    </div>
  );
}

export default Sidebar;
