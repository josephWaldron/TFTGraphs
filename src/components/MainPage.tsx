import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { Center, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import getChartData from "../hooks/getChartData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

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

  const [selectedButtons, setSelectedButtons] = useState<selectedButton[]>([]);

  const handleButtonClick = (buttonClicked: selectedButton) => {
    const isButtonSelected = selectedButtons.some(
      (button) => button.value === buttonClicked.value
    );
    if (isButtonSelected) {
      setSelectedButtons(
        selectedButtons.filter((button) => button.value !== buttonClicked.value)
      );
    } else {
      setSelectedButtons([...selectedButtons, buttonClicked]);
    }
  };

  const chartData = getChartData({ chartType: chartType });

  const colors = [
    "#FFA07A",
    "#7FFFD4",
    "#DC143C",
    "#FFD700",
    "#FF69B4",
    "#ADFF2F",
    "#D2691E",
    "#BA55D3",
    "#6495ED",
    "#F0E68C",
    "#FF6347",
    "#008B8B",
    "#FFDEAD",
    "#9ACD32",
    "#EE82EE",
    "#48D1CC",
    "#FFFACD",
    "#5F9EA0",
    "#A0522D",
    "#7FFF00",
    "#FFDAB9",
    "#8A2BE2",
    "#00FFFF",
    "#CD853F",
    "#8B4513",
    "#FF4500",
    "#2E8B57",
  ];

  return (
    <div style={{ margin: "20px" }}>
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
      </Tabs>
      <Buttons onSelectButton={handleButtonClick} />

      <br />

      {/* <div>
        {selectedButtons.map((button) => (
          <p key={`${button.type}-${button.value}`}>
            {button.value} : {button.type} : {button.id}
          </p>
        ))}
      </div> */}
      {/* insert chart here */}

      <ResponsiveContainer width="100%" height={600}>
        <LineChart data={chartData}>
          {selectedButtons.map((button, index) => (
            <Line
              key={`${button.type}-${button.value}`}
              type="monotone"
              dataKey={`${button.id}_Frequency`}
              stroke={colors[index % colors.length]}
              dot={false}
            />
          ))}
          {/* <Line type="monotone" dataKey="ADMIN_Frequency" /> */}
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="gamedatetime" />
          <YAxis hide={true} />
          <Tooltip />
          <Legend />
          <ReferenceLine
            x="2023-01-17"
            stroke="#FFA500"
            label={{ value: "13.1b", position: "insideBottomRight" }}
          />
          <ReferenceLine
            x="2023-01-24"
            stroke="#FFA500"
            label={{ value: "13.1c", position: "insideBottomRight" }}
          />
          <ReferenceLine
            x="2023-02-07"
            stroke="#FFA500"
            label={{ value: "13.3", position: "insideBottomRight" }}
          />
          <ReferenceLine
            x="2023-02-22"
            stroke="#FFA500"
            label={{ value: "13.4", position: "insideBottomRight" }}
          />
          <ReferenceLine
            x="2023-03-07"
            stroke="#FFA500"
            label={{ value: "13.5", position: "insideBottomRight" }}
          />
        </LineChart>
      </ResponsiveContainer>

      <Text align="center">
        Data set comprises 19,366 challenger games played in TFT set 8 between
        January 11th, 2023 and March 21st, 2023
      </Text>
      <br />
      <Text align="center" fontSize="xs">
        The threshold for each trait represents the minimum number of units
        required to activate the corresponding trait bonuses. For instance, if
        you have at least 2 brawlers on your board, all brawlers will receive a
        HP bonus.
      </Text>
    </div>
  );
};

export default MainPage;
