import 'styled-components/native';
import { CSSObject } from 'styled-components';

type TypographyItem = Pick<CSSObject, 'fontFamily' | 'fontStyle' | 'fontWeight' | 'fontSize' | 'lineHeight' | 'color'>;

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primaryColor: string;
      primaryColorDark: string;
      secondaryColor: string;
      tertiaryColor: string;
      tertiaryColorDark: string;

      backgroundColor: string;
    };
    typography: {
      text1: TypographyItem;
      text2: TypographyItem;
      text3: TypographyItem;
    };
  }
}
