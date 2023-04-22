import { useEffect, useState } from "react";
import Frequency from "../data/traits/freq";
import Top4Rate from "../data/traits/top_4";
import Winrate from "../data/traits/winrate";

interface Props {
  chartType: "Frequency" | "Top4Rate" | "Winrate";
}

interface traitData {
  gamedatetime: string;
  ADMIN_Frequency: number;
  AnimaSquad_Frequency: number;
  Arsenal_Frequency: number;
  Civilian_Frequency: number;
  Gadgeteen_Frequency: number;
  LaserCorps_Frequency: number;
  MechaPRIME_Frequency: number;
  OxForce_Frequency: number;
  StarGuardian_Frequency: number;
  Supers_Frequency: number;
  Threat_Frequency: number;
  Underground_Frequency: number;
  Ace_Frequency: number;
  Aegis_Frequency: number;
  Brawler_Frequency: number;
  Corrupted_Frequency: number;
  Defender_Frequency: number;
  Duelist_Frequency: number;
  Forecaster_Frequency: number;
  Hacker_Frequency: number;
  Heart_Frequency: number;
  Mascot_Frequency: number;
  Prankster_Frequency: number;
  Recon_Frequency: number;
  Renegade_Frequency: number;
  Spellslinger_Frequency: number;
  Sureshot_Frequency: number;
}
[];

const getChartData = ({ chartType }: Props) => {
  const [data, setData] = useState<traitData[]>([]);

  useEffect(() => {
    switch (chartType) {
      case "Frequency":
        setData(Frequency);
        break;
      case "Top4Rate":
        setData(Top4Rate);
        break;
      case "Winrate":
        setData(Winrate);
        break;
    }
  }, [chartType]);
  return data;
};

export default getChartData;
