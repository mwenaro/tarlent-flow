import { DashboardSideBarProps } from './types';
import { Typography } from '../../atoms';
import Link from 'next/link';

export default function DashboardSidebar({
  children,
  user,
  links,
  className,
}: DashboardSideBarProps & { className?: string }) {
  //   if (children) return { children };
  return (
    <div
      className={`w-full bg-skin-primary absolute min-h-fit h-screen text-white px-8 text-2xl font-bold ${className}`}
    >
      {/* User Profile Pic */}
      <div className=" text-blue-900">
        <Typography variant="h4" className='px-2 py-2'>{user.name}</Typography>
        <Typography variant="h5" className='px-2 py-2'>{user.role}</Typography>
      </div>

      {/* Links */}
      <ul className="w-full flex flex-col gap-3 p2">
        {links.map(({ href, title }, indx: number) => (
          <li key={indx}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
