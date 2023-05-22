import React from "react";
import { platform } from "../Hooks/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs"
import { IconType } from "react-icons";

interface Props {
  platform: platform[];
}

const PlatformIcons = ({ platform }: Props) => {
    let Icons : {[key: string] : IconType}= {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
  return (
    <>
    <HStack marginY={3}>
    {platform.map((platform) => (
        <Icon as={Icons[platform.slug]} color={"gray.500"} ></Icon>
      ))}
    </HStack>
      
    </>
  );
};

export default PlatformIcons;

