import React from 'react';
import { Button } from '@chakra-ui/react';

// REUSABLE BUTTON WITH LOTS OF SETTINGS

const ButtonCustom = ({
  colorScheme,
  color,
  bgColor,
  btnText,
  variant,
  borderColor,
  borderSize,
  padX,
  padY,
  rightIcon,
  btnSize,
  btnHeight,
  zIndex,
  to,
  as,
  href,
  target,
  rel,
  disabled,
}) => {
  return (
    <Button
      borderRadius='16px'
      size={btnSize ? btnSize : { base: 'sm', sm: 'sm', md: 'md', lg: 'l' }}
      height={
        btnHeight
          ? btnHeight
          : { base: '45px', sm: '45px', md: '50px', lg: '59px' }
      }
      minH='45px'
      border={borderSize}
      variant={variant}
      borderColor={borderColor}
      colorScheme={colorScheme}
      color={color}
      bgColor={disabled ? 'gray' : bgColor}
      px={padX}
      py={padY}
      rightIcon={rightIcon}
      zIndex={zIndex}
      to={to}
      as={as}
      href={href}
      target={target}
      rel={rel}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      pointerEvents={disabled ? 'none' : 'auto'}
    >
      {btnText}
    </Button>
  );
};

export default ButtonCustom;
