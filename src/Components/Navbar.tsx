import { HStack , Image, Text} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorMode from "./ColorMode"



const Navbar = () => {

 
  return (
    <div>
        <HStack justifyContent="space-between" padding="10px">
           <Image src={logo} boxSize="60px" />
           <ColorMode></ColorMode>
        </HStack>
    </div>
  )
}

export default Navbar
