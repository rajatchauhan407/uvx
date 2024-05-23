// src/Typography.tsx
import React from 'react';

interface TypographyProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  variant?: 'body' | 'heading';
  component?: keyof JSX.IntrinsicElements;
  styles?: React.CSSProperties;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  fontSize = '16px',
  fontWeight = 'normal',
  color = 'black',
  variant = 'body',
  component: Component = 'p',
  styles = {},
  children
}) => {
  const fontFamilies = {
    body: 'Roboto, sans-serif',
    heading: 'Lato, serif',
  };

  const defaultStyle = {
    fontSize,
    fontWeight,
    color,
    fontFamily: fontFamilies[variant],
  };

  const combinedStyle = { ...defaultStyle, ...styles };

  return <Component style={combinedStyle}>{children}</Component>;
};

export default Typography;
