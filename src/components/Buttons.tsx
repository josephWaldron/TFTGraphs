import { Button } from "@chakra-ui/react";
import { selectedButton } from "./MainPage";
import { useState } from "react";

interface Props {
  onSelectButton: (selectedButton: selectedButton) => void;
}

const sampleButtons = [
  { type: "trait", value: "OxForce" },
  { type: "trait", value: "Ace" },
  { type: "trait", value: "Anima" },
];

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

  return (
    <div style={{ margin: "1rem 0" }}>
      <h1>Sample Buttons</h1>
      {sampleButtons.map((button: selectedButton) => (
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
          {button.value}
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
