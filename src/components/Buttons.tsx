import {
  Button,
  Card,
  HStack,
  Image,
  Show,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import { selectedButton } from "./MainPage";
import { useEffect, useState } from "react";
import traits from "../assets/traitsData";

interface Props {
  onSelectButton: (selectedButton: selectedButton) => void;
}

const Buttons = ({ onSelectButton }: Props) => {
  const [selectedButtons, setSelectedButtons] = useState<selectedButton[]>([]);
  const [showTraitButtons, setShowTraitButtons] = useState<boolean>(true);

  const handleButtonClick = (button: selectedButton) => {
    const buttonIndex = selectedButtons.findIndex(
      (selectedButton) => selectedButton.value === button.value
    );
    if (buttonIndex === -1) {
      // If the button is not already selected, add it to the list
      setSelectedButtons([...selectedButtons, button]);
    } else {
      // If the button is already selected, remove it from the list
      const updatedSelectedButtons = [...selectedButtons];
      updatedSelectedButtons.splice(buttonIndex, 1);
      setSelectedButtons(updatedSelectedButtons);
    }
    onSelectButton(button);
  };

  const loadTraitImg = async () => {
    const traitButtonsWithImages = await Promise.all(
      traits.map(async (trait) => {
        const imgModule = await import(`../assets/traits/${trait.img}.png`);
        const imgSrc = imgModule.default;
        return {
          type: "trait",
          value: trait.name,
          id: trait.id,
          imgSrc: imgSrc,
        };
      })
    );
    return traitButtonsWithImages;
  };

  const [traitButtons, setTraitButtons] = useState<selectedButton[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const loadedImages = await loadTraitImg();
      setTraitButtons(loadedImages);
    };
    fetchImages();
  }, []);

  const handleToggleAllClick = () => {
    setShowTraitButtons(!showTraitButtons);
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      {showTraitButtons && (
        <div
          style={{
            borderRadius: "8px",
            backgroundColor: "#292a2d",
            padding: "10px",
          }}
        >
          {traitButtons.map((button: selectedButton) => (
            <Button
              key={button.value}
              size={"sm"}
              onClick={() => handleButtonClick(button)}
              colorScheme={
                selectedButtons.some(
                  (selectedButton) => selectedButton.value === button.value
                )
                  ? "blue"
                  : "gray"
              }
              style={{ margin: "5px" }}
            >
              <Image src={button.imgSrc} alt={button.value} width="20px" />
              {button.value}
            </Button>
          ))}
        </div>
      )}
      <br />
      <HStack justify={"space-between"}>
        <Spacer />
        <Button onClick={handleToggleAllClick} width="110px">
          <Tooltip label="Toggle Trait Buttons" aria-label="Select all traits">
            {showTraitButtons ? "Hide Buttons" : "Show Buttons"}
          </Tooltip>
        </Button>
      </HStack>
    </div>
  );
};

export default Buttons;
