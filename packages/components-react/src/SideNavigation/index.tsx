import { IconArrowBarToLeft, IconArrowBarToRight, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Button, Link } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, useState } from 'react';
import '@nl-design-system-kernteam/components-css/menu-list/index.scss';
import '@nl-design-system-kernteam/components-css/side-bar/index.scss';

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
      <Button appearance={'subtle-button'} onClick={() => setOpen(!open)}>
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
          <ul className={'kernteam-menu-list'}>
            {listItems?.map((item, index) => <MenuListItem key={index} {...item} />)}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export interface MenuListItemProps {
  label: string;
  href: string;
  children?: MenuListItemProps[];
}

export const MenuListItem = (props: MenuListItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div className={'kernteam-menu-list__item'}>
        <Link className={'kernteam-menu-list__link'} href={props.href}>
          {props.label}
        </Link>
        {props.children && (
          <Button appearance="subtle-button" className="kernteam-menu-list__icon-button" onClick={() => setOpen(!open)}>
            <span className="utrecht-icon">{open ? <IconChevronDown /> : <IconChevronUp />}</span>
          </Button>
        )}
      </div>
      {props.children && open && (
        <>
          <MenuList>
            {props.children.map((child, index) => (
              <MenuListItem key={index} {...child} />
            ))}
          </MenuList>
        </>
      )}
    </li>
  );
};

export const MenuList = ({ children, ...restProps }: PropsWithChildren) => {
  return (
    <ul className={'kernteam-menu-list'} {...restProps}>
      {children}
    </ul>
  );
};
