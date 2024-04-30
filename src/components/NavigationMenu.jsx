import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// REUSABLE HEADER/FOOTER NAVIGATION

const NavigationMenu = ({
  direction = '',
  size = 'l',
  onClick,
  itemsAligned = 'center',
  gapSize,
  displayed = 'flex',
  contentJustified = '',
  minWidth = 'max-content',
  fz = '',
}) => {
  const menuItems = [
    { text: 'Home', to: '/', onClick: onClick },
    { text: 'Recipes', to: '/recipes' },
    { text: 'Contact', to: '/contact' },
    { text: 'About us', to: '/about' },
  ];

  return (
    <Flex
      direction={direction}
      alignItems={itemsAligned}
      minWidth={minWidth}
      gap={gapSize}
      display={displayed}
      justifyContent={contentJustified}
    >
      {menuItems.map((item, index) => (
        <Button
          key={index}
          as={Link}
          to={item.to}
          colorScheme='black'
          variant='link'
          size={size}
          onClick={item.onClick}
          fontSize={fz}
        >
          {item.text}
        </Button>
      ))}
    </Flex>
  );
};

export default NavigationMenu;
