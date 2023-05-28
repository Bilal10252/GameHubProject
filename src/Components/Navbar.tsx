import { HStack , Image, Text} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorMode from "./ColorMode"
import SearchInput from "./SearchInput"

interface Props{
  search: (search: string) => void;
}


const Navbar = ({search} : Props) => {

 
  return (
    <div>
        <HStack justifyContent="space-between" padding="10px">
           <Image src={logo} boxSize="60px" />
           <SearchInput search={search }></SearchInput>
           <ColorMode></ColorMode>
        </HStack>
    </div>
  )
}

export default Navbar
