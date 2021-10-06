import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    secBackground: string;
    textColor: string;
    secTextColor: string;
    yellow: string;
    blue: string;
  }
}
