import { IconArrowBarToLeft, IconArrowBarToRight } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { HTMLAttributes, useState } from 'react';
import '@nl-design-system-kernteam/components-css/side-navigation/index.scss';
import { MenuList, MenuListItemProps } from '../MenuList';

export interface SideNavigationProps extends HTMLAttributes<HTMLElement> {
  listItems: MenuListItemProps[];
}

export const SideNavigation = ({ className, listItems, ...restProps }: SideNavigationProps) => {
  const [open, setOpen] = useState(true);

  const sideNavClassname = clsx(className, 'kernteam-side-navigation', {
    ['kernteam-side-navigation--hidden']: !open,
  });

  return (
    <div className={sideNavClassname} {...restProps}>
      <Button
        className={'kernteam-side-navigation__toggle-button'}
        appearance={'subtle-button'}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <>
            <IconArrowBarToLeft />
            Verberg
          </>
        ) : (
          <>
            <IconArrowBarToRight />
          </>
        )}
      </Button>
      <div className={'kernteam-side-navigation__content'}>
        <nav className={'kernteam-side-navigation-nav'}>
          <MenuList menuListItems={listItems} />
        </nav>
      </div>
    </div>
  );
};
