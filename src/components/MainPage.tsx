import { useState } from "react";
import Buttons from "./Buttons";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

export interface selectedButton {
  type: string;
  value: string;
  id: string;
  imgSrc: string;
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

  const threhholdExplination =
    "The threshold for each trait represents the minimum number of units required to activate the corresponding trait bonuses. For instance, if you have at least 2 brawlers on your board, all brawlers will receive a HP bonus";

  return (
    <div>
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
            <h1>{threhholdExplination}</h1>
            <Buttons onSelectButton={handleButtonClick} />
          </TabPanel>
          <TabPanel>
            <h1>{chartType}</h1>
            <h1>{threhholdExplination}</h1>
            <Buttons onSelectButton={handleButtonClick} />
          </TabPanel>
          <TabPanel>
            <h1>{chartType}</h1>
            <h1>{threhholdExplination}</h1>
            <Buttons onSelectButton={handleButtonClick} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Text align="center">
        Data set comprises 19,366 challenger games played in TFT set 8 between
        January 11th, 2023 and March 21st, 2023
      </Text>
      <div>
        {chartType === "Frequency" &&
          selectedButtonsFrequency.map((button) => (
            <p key={`${button.type}-${button.value}`}>
              {button.value} : {button.type} : {button.id}
            </p>
          ))}
        {chartType === "Top4Rate" &&
          selectedButtonsTop4Rate.map((button) => (
            <p key={`${button.type}-${button.value}`}>
              {" "}
              {button.value} : {button.type} : {button.id}
            </p>
          ))}
        {chartType === "Winrate" &&
          selectedButtonsWinRate.map((button) => (
            <p key={`${button.type}-${button.value}`}>
              {" "}
              {button.value} : {button.type} : {button.id}
            </p>
          ))}
      </div>
    </div>
  );
};

export default MainPage;
