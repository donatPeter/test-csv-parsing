export interface ICheckboxProps {
  isDisabled: boolean;
  form: any;
  field: any;
  label: string | JSX.Element;
  onChange?: (newValue: boolean) => void;
}

export interface ICheckboxLabelState {
  isChecked: boolean;
  isDisabled: boolean;
  isError: boolean;
}
