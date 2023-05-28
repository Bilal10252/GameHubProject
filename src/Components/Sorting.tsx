import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Sorting = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
          Order
        </MenuButton>
        <MenuList>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>4</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Sorting;
