import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Button, Link } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { useState } from 'react';
import '@nl-design-system-kernteam/components-css/menu-list/index.scss';

export interface MenuListItemProps {
  label: string;
  href: string;
  current?: boolean;
  subMenuListItems?: MenuListItemProps[];
}

export const MenuList = ({ menuListItems }: { menuListItems: MenuListItemProps[] }) => {
  return (
    <ul className={'kernteam-menu-list'}>
      {menuListItems?.map((item, index) => (
        <MenuListItem
          label={item.label}
          href={item.href}
          subMenuListItems={item.subMenuListItems}
          current={item.current}
          key={index}
        />
      ))}
    </ul>
  );
};

export const MenuListItem = ({ href, label, current = false, subMenuListItems }: MenuListItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={'kernteam-menu-list-item'}>
      <div className={'kernteam-menu-list-item__label'}>
        <Link
          className={clsx('kernteam-menu-list-item__link', current && 'kernteam-menu-list-item__link--current')}
          href={href}
        >
          {label}
        </Link>
        {subMenuListItems && (
          <Button appearance="subtle-button" className="kernteam-menu-list__icon-button" onClick={() => setOpen(!open)}>
            <span className="utrecht-icon">{open ? <IconChevronDown /> : <IconChevronUp />}</span>
          </Button>
        )}
      </div>
      {subMenuListItems && open && (
        <>
          <MenuList menuListItems={subMenuListItems} />
        </>
      )}
    </li>
  );
};
