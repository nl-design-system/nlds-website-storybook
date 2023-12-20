import { IconBuilding, IconUser } from '@tabler/icons-react';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  altText?: string;
  privateProfile?: boolean;
}
export const Avatar = ({
  children,
  className,
  imageSrc,
  altText,
  privateProfile,
  ...props
}: PropsWithChildren<AvatarProps>) => {
  return (
    <div className={clsx('kernteam-avatar', className)} {...props}>
      {imageSrc ? (
        <img src={imageSrc} alt={altText} className="kernteam-avatar__image" />
      ) : children ? (
        children
      ) : privateProfile ? (
        <IconUser className="kernteam-avatar__icon" />
      ) : (
        <IconBuilding className="kernteam-avatar__icon" />
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
