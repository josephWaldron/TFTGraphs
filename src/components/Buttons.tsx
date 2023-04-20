import { Button, Image } from "@chakra-ui/react";
import { selectedButton } from "./MainPage";
import { useEffect, useState } from "react";
import traits from "../assets/traitsData";

interface Props {
  onSelectButton: (selectedButton: selectedButton) => void;
}

const Buttons = ({ onSelectButton }: Props) => {
  const [selectedButtons, setSelectedButtons] = useState<selectedButton[]>([]);

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

  return (
    <div style={{ margin: "1rem 0" }}>
      <h1>Traits</h1>
      {traitButtons.map((button: selectedButton) => (
        <Button
          key={button.value}
          onClick={() => handleButtonClick(button)}
          colorScheme={
            selectedButtons.some(
              (selectedButton) => selectedButton.value === button.value
            )
              ? "green"
              : "gray"
          }
          style={{ margin: "0.5rem" }}
        >
          <Image src={button.imgSrc} alt={button.value} />
          {button.value}
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
