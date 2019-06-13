import styled from '../../utils/stylesComponents';

interface IFormGroup {
  margin?: string;
  width?: string;
  padding?: string;
}

export const FormGroup = styled.div<IFormGroup>`
  padding: ${({ padding }) => padding || 0};
  margin: ${({ margin }) => margin || '20px'};
  width: ${({ width }) => width || '100%'};
`;
