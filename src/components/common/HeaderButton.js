import React, { useMemo } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

export const commonButtonCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16%;
  height: 70px;
  border-radius: 5px;
  padding-left: 0.6em;
  padding-right: 0.6em;
  background: #fff;
  font-size: 18px;
  margin: 0 5px;
`;

const CustomButton = styled.button`
  ${commonButtonCSS}
`;

export const buttonTypes = {
  BLUE: 'BLUE',
  YELLOW: 'YELLOW',
  GRAY: 'GRAY',
};

const blueTheme = {
  background: '#24497b',
  color: '#fff',
};

const yellowTheme = {
  //   background: SANDY_YELLOW,
  //   color: DUSK_BLUE,
};

const grayTheme = {
  //   background: PALE_GRAY,
  color: '#24497b',
};

const HeaderButton = ({
  children,
  type = buttonTypes.BLUE,
  htmlType = 'button',
  width, //= 180,
  height, //= 60,
  fontSize, // = 18,
  color,
  background,
  fontWeight, // = 400,
  style = {},
  onClick = () => {},
  css,
  ...rest
}) => {
  // 버튼 타입에 기반한 색
  const buttonTheme = useMemo(() => {
    switch (type) {
      case buttonTypes.BLUE:
        return blueTheme;
      case buttonTypes.YELLOW:
        return yellowTheme;
      case buttonTypes.GRAY:
        return grayTheme;
      default:
        return grayTheme;
    }
  }, [type]);

  return (
    <ThemeProvider theme={buttonTheme}>
      <CustomButton
        style={{
          width: typeof width === 'number' ? width + 'px' : width,
          height: typeof height === 'number' ? height + 'px' : height,
          fontSize: typeof fontSize === 'number' ? fontSize + 'px' : fontSize,
          fontWeight,
          ...style,
        }}
        css={css}
        onClick={onClick}
        type={htmlType}
        {...rest}
      >
        {children}
      </CustomButton>
    </ThemeProvider>
  );
};

export default HeaderButton;
