import React, { useEffect } from 'react';
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
} from '@chakra-ui/react';

function Nav(props) {
    const {
      pages = [],
      setCurrentPage,
      currentPage
    } = props;

    useEffect(() => {
      document.title = currentPage.name
    }, [currentPage]);

    return (
      <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button} rightIcon=">">Navigation</MenuButton>
          <MenuList>
          {pages.map((Page) => (
            <MenuItem key={Page.name} >
              <span onClick={() => setCurrentPage(Page)} >
                {Page.name}
              </span>
            </MenuItem>
        ))}
          </MenuList>
        </>
      )}
      </Menu>
    );
}

export default Nav;