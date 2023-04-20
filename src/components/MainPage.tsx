import { useState } from "react";
import Buttons from "./Buttons";
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
  Spacer,
} from "@chakra-ui/react";
import testIcon from "../assets/traits/Trait_Icon_3_Brawler.png";

export interface selectedButton {
  type: string;
  value: string;
}

const MainPage = () => {
  const [chartType, setChartType] = useState<
    "Frequency" | "Top4Rate" | "Winrate"
  >("Frequency");

  const [selectedButtonsFrequency, setSelectedButtonsFrequency] = useState<
    selectedButton[]
  >([]);
  const [selectedButtonsTop4Rate, setSelectedButtonsTop4Rate] = useState<
    selectedButton[]
  >([]);
  const [selectedButtonsWinRate, setSelectedButtonsWinRate] = useState<
    selectedButton[]
  >([]);

  const handleButtonClick = (buttonClicked: selectedButton) => {
    switch (chartType) {
      case "Frequency":
        const isButtonSelectedFrequency = selectedButtonsFrequency.some(
          (button) => button.value === buttonClicked.value
        );
        if (isButtonSelectedFrequency) {
          setSelectedButtonsFrequency(
            selectedButtonsFrequency.filter(
              (button) => button.value !== buttonClicked.value
            )
          );
        } else {
          setSelectedButtonsFrequency([
            ...selectedButtonsFrequency,
            buttonClicked,
          ]);
        }
        break;
      case "Top4Rate":
        const isButtonSelectedTop4Rate = selectedButtonsTop4Rate.some(
          (button) => button.value === buttonClicked.value
        );
        if (isButtonSelectedTop4Rate) {
          setSelectedButtonsTop4Rate(
            selectedButtonsTop4Rate.filter(
              (button) => button.value !== buttonClicked.value
            )
          );
        } else {
          setSelectedButtonsTop4Rate([
            ...selectedButtonsTop4Rate,
            buttonClicked,
          ]);
        }
        break;
      case "Winrate":
        const isButtonSelectedWinRate = selectedButtonsWinRate.some(
          (button) => button.value === buttonClicked.value
        );
        if (isButtonSelectedWinRate) {
          setSelectedButtonsWinRate(
            selectedButtonsWinRate.filter(
              (button) => button.value !== buttonClicked.value
            )
          );
        } else {
          setSelectedButtonsWinRate([...selectedButtonsWinRate, buttonClicked]);
        }
        break;
    }
  };

  return (
    <div>
      <Button>
        <Image src={testIcon} width={6} />
        <Spacer />
        Brawler
      </Button>
      <Tabs
        isFitted
        variant="enclosed"
        onChange={(index) => {
          switch (index) {
            case 0:
              setChartType("Frequency");
              break;
            case 1:
              setChartType("Top4Rate");
              break;
            case 2:
              setChartType("Winrate");
              break;
          }
        }}
      >
        <TabList mb="1em">
          <Tab>Frequency</Tab>
          <Tab>Top 4 Rate</Tab>
          <Tab>Win Rate</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h1>{chartType}</h1>
            <Buttons onSelectButton={handleButtonClick} />
          </TabPanel>
          <TabPanel>
            <h1>{chartType}</h1>
            <Buttons onSelectButton={handleButtonClick} />
          </TabPanel>
          <TabPanel>
            <h1>{chartType}</h1>
            <Buttons onSelectButton={handleButtonClick} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div>
        {chartType === "Frequency" &&
          selectedButtonsFrequency.map((button) => (
            <p key={`${button.type}-${button.value}`}>
              {button.value} : {button.type}
            </p>
          ))}
        {chartType === "Top4Rate" &&
          selectedButtonsTop4Rate.map((button) => (
            <p key={`${button.type}-${button.value}`}>
              {" "}
              {button.value} : {button.type}
            </p>
          ))}
        {chartType === "Winrate" &&
          selectedButtonsWinRate.map((button) => (
            <p key={`${button.type}-${button.value}`}>
              {" "}
              {button.value} : {button.type}
            </p>
          ))}
      </div>
    </div>
  );
};

export default MainPage;