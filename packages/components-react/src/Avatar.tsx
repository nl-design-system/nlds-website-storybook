import { IconBuilding, IconUser } from '@tabler/icons-react';
import React, { CSSProperties, HTMLAttributes } from 'react';

interface AvatarProps extends HTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  imageSrc?: string;
  altText?: string;
  privateProfile?: boolean;
}
export const Avatar = ({
  children,
  imageSrc,
  privateProfile,
  altText,
  borderRadius,
  backgroundColor,
  color,
  ...props
}: AvatarProps) => {
  const avatarStyle: CSSProperties = {
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    color: color,
  };
  return (
    <button className={'kernteam-avatar'} style={avatarStyle} {...props}>
      {imageSrc ? (
        <img src={imageSrc} alt={altText} className="kernteam-avatar__image" />
      ) : children ? (
        children
      ) : privateProfile ? (
        <IconUser className="kernteam-avatar__icon" />
      ) : (
        <IconBuilding className="kernteam-avatar__icon" />
      )}
    </button>
  );
};

Avatar.displayName = 'Avatar';
