import 'react';
declare module 'react' {
  export interface CSSProperties {
    [key: `--kernteam-${string}`]: string | number | undefined;
  }
}
