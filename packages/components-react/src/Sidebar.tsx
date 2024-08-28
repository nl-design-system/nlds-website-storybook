import { Button } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';
import '@nl-design-system-kernteam/components-css/sidebar/index.scss';

export type SidebarProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const Sidebar = ({ children, className, ...restProps }: SidebarProps) => {
  return (
    <div className={clsx('kernteam-sidebar', className)} {...restProps}>
      {children}
    </div>
  );
};

export const SidebarHeader = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={clsx('kernteam-sidebar__header', className)} {...restProps}>
      {children}
    </div>
  );
};

export const SidebarHeaderButton = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <Button appearance={'subtle-button'} className={clsx('kernteam-sidebar__header-button', className)} {...restProps}>
      {children}
    </Button>
  );
};

export const SidebarTitle = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={clsx('kernteam-sidebar__title', className)} {...restProps}>
      {children}
    </div>
  );
};
export const SidebarContent = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={clsx('kernteam-sidebar__content', className)} {...restProps}>
      {children}
    </div>
  );
};
