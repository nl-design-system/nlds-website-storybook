'use client';

import { Heading2, Paragraph } from '@utrecht/component-library-react';
import { Link } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { FC, HTMLAttributes } from 'react';
import './Card.css';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  title: string;
  description: string;
  link: {
    href: string;
  };
}

export const Card: FC<CardProps> = ({ description, title, link: { href }, ...props }) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  return (
    <div {...props} className={clsx('utrecht-card', props.className)} onClick={() => linkRef.current?.click()}>
      <div className={'utrecht-card__content'}>
        <Heading2 className="utrecht-card__title">
          <Link ref={linkRef} href={href} className={'utrecht-link utrecht-link--html-a'}>
            {title}
          </Link>
        </Heading2>
        <Paragraph className="utrecht-card__body">{description}</Paragraph>
      </div>
    </div>
  );
};

Card.displayName = 'Card';
