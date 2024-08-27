import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import '@nl-design-system-kernteam/components-css/sidebar/index.scss';

export type SidebarProps = HTMLAttributes<HTMLElement>;

export const Sidebar = ({ children, className, ...restProps }: PropsWithChildren<SidebarProps>) => {
  return (
    <div className={clsx('kernteam-sidebar', className)} {...restProps}>
      {children}
    </div>
  );
};
