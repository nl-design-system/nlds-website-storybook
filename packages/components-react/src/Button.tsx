import * as clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import * as React from 'react';
import '@kernteam/components-css/button/index.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<ButtonProps>, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={clsx('kernteam-button', className)} {...restProps}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
