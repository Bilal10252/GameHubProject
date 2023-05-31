import React from 'react'
import { game } from '../Hooks/useGame';
import bullsEye from "../assets/bulls-eye.webp"
import meh from "../assets/meh.webp"
import thumbs from "../assets/thumbs-up.webp"
import { Image, ImageProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props{
    game: game;
}

const Emojis = ({game}: Props) => {
    if(game.rating_top<3){
        return null;
    }

    let emojisMap:{[key: number] : ImageProps}  = {
        3 : {src: meh,  boxSize:"25px"},
        4: {src: thumbs,  boxSize:"25px"},
        5 : {src: bullsEye,  boxSize:"35px"}
    }
  return (
    <>
      <Image {...emojisMap[game.rating_top]} marginTop={1}></Image>
    </>
  )
}

export default Emojis
