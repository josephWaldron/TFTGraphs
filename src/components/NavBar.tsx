import logo from "../assets/TFT Graphs-logos.jpeg";
import { HStack, Image, Spacer, Text, Button } from "@chakra-ui/react";
import { MdQuestionMark } from "react-icons/md";
import { MdHome } from "react-icons/md";

const NavBar = () => {
  return (
    <HStack padding={2}>
      <a href="/">
        <Image src={logo} alt="TFT Graphs" width="80px" borderRadius={10} />
      </a>
      <Spacer />
      <a href="/">
        <Text color="#efd203" fontSize={30}>
          TFT Graphs
        </Text>
      </a>
      <Spacer />
      <Button
        rightIcon={<MdHome />}
        color={"#f3d503"}
        onClick={() => {
          location.href = "/";
        }}
      >
        Home
      </Button>
      {""}
      <Button
        color="#efd203"
        rightIcon={<MdQuestionMark />}
        onClick={() => {
          location.href = "about";
        }}
      >
        About
      </Button>
    </HStack>
  );
};

export default NavBar;
