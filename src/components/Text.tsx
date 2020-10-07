import styled from 'themes';

import { capitalize } from 'utils';

type TextProps = {
  color?: string
}

const Text = styled.Text<TextProps>`
  color: ${p =>
    p.theme.colors[
      `color${capitalize(p.color || 'onBackground')}`
    ] || p.color
  };
  font-size: ${p => p.theme.text.body1.fontSize}px;
`;

export default Text;
