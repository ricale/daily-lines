import styled, { css } from 'themes';

type TextProps = {
  color?: string
}
const Text = styled.Text<TextProps>`
  color: ${p => p.theme.colors.colorOnBackground};
  ${p => p.color && css`
    color: ${p.theme.colors[p.color] || p.color};
  `}
  font-size: ${p => p.theme.text.body1.fontSize}px;
`;

export default Text;
