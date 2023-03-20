import { SVGProps } from 'react';

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div className='group flex max-w-fit space-x-2 items-center rounded-full px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-gray-100'>
      <Icon className='h-6 w-6' />
      <p className='hidden md:inline-flex text-base font-light lg:text-xl group-hover:text-twitter'>
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
