import Frequency from "../data/traits/freq";
import Top4Rate from "../data/traits/freq";
import Winrate from "../data/traits/freq";

interface Props {
  chartType: "Frequency" | "Top4Rate" | "Winrate";
}

const getChartData = ({ chartType }: Props) => {
  let data;
  switch (chartType) {
    case "Frequency":
      data = Frequency;
      break;
    case "Top4Rate":
      data = Top4Rate;
      break;
    case "Winrate":
      data = Winrate;
      break;
  }
  console.log(chartType);
  return data;
};

export default getChartData;
