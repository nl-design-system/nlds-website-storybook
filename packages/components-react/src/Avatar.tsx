import { IconBuilding, IconUser } from '@tabler/icons-react';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  privateProfile?: boolean;
}
export const Avatar = ({ children, className, src, alt, privateProfile, ...props }: PropsWithChildren<AvatarProps>) => {
  return (
    <div className={clsx('kernteam-avatar', className)} {...props}>
      {src ? (
        <img src={src} alt={alt} className="kernteam-avatar__image" />
      ) : children ? (
        children
      ) : privateProfile ? (
        <IconUser className="kernteam-avatar__text" />
      ) : (
        <IconBuilding className="kernteam-avatar__text" />
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
