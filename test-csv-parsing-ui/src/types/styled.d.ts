import 'styled-components'

interface IBase {
  color: string;
}

interface IColor {
  base: string
}

interface IFontSize {
  textBig: string;
  textSmall: string;
}

interface IModal {
  minWidth: string;
  padding: string;
}

interface IBorderRadius {
  big: string;
  small: string;
}

interface IShadow {
  textInput: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    base: IBase;
    borderRadius: IBorderRadius;
    color: IColor;
    fontSize: IFontSize;
    modal: IModal;
    shadow: IShadow;
  }
}