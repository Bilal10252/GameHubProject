import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import useGame, { platform } from "../Hooks/useGame";
import usePlatform, { PlatformObj } from "../Hooks/usePlatform";

interface Props{
    setSelectedPlatform: (platform: PlatformObj) => void;
    selectedPlatform: PlatformObj | null; 
   
}
const Platform = ({setSelectedPlatform, selectedPlatform}: Props) => {

    let {data,error} = usePlatform();
    
  return (
    <>
     {error && null}
     <Menu >
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>} >{ selectedPlatform ? selectedPlatform.name : "Platforms"}</MenuButton>
        <MenuList >
            {data.map(platform => <MenuItem onClick={() => (setSelectedPlatform(platform)) } key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
     </Menu>

       
       
    </>
  );
};

export default Platform;
