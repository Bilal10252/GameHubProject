import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
    search : (search : string) => void;
}

const SearchInput = ({search} : Props) => {
  let ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
           search(ref.current.value);
          
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
          <Input
            placeholder="Search game..."
            borderRadius={50}
            variant={"filled"}
            ref={ref}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
