'use client';

import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Heading2, Link, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { FC, HTMLAttributes } from 'react';
import './Card.css';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  title: string;
  description: string;
  link: {
    href: string;
    linktitle: string;
  };
}

export const Card: FC<CardProps> = ({ description, title, link: { href, linktitle }, ...props }) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  return (
    <div {...props} className={clsx('kernteam-card', props.className)} onClick={() => linkRef.current?.click()}>
      <div className={'kernteam-card__content'}>
        <Heading2 className="kernteam-card__title">{title}</Heading2>
        <Paragraph className="kernteam-card__body">{description}</Paragraph>
        <Link ref={linkRef} href={href} className={'kernteam-link kernteam-link--html-a'}>
          {linktitle}
          <IconArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

Card.displayName = 'Card';
