import { Text, Image, Button, Grid, GridItem, Link } from "@chakra-ui/react";
import poster from "../assets/ResearchDaysRiotAPI.ppt.png";
import { MdHome } from "react-icons/md";
import joseph from "../assets/squareMe.jpg";

const About = () => {
  return (
    <>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Button
          rightIcon={<MdHome />}
          color={"#f3d503"}
          onClick={() => {
            location.href = "/";
          }}
          size="lg"
        >
          Home
        </Button>
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "5",
          }}
        >
          <Text fontSize="4xl" color="#f3d503">
            About the Creator
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "4",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", margin: "10px" }}>
              <Image src={joseph} width={300} borderRadius={20} />
              <br />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4",
                margin: "10px",
                marginTop: "10px",
              }}
            >
              <Text fontSize={"2xl"} color="#f3d503" align="center">
                Joseph Waldron
              </Text>
              <Text fontSize={"xl"} color="#e64a19">
                Full Stack Developer | Data Scientist
              </Text>
              <Text align="center" fontSize={"xl"}>
                Kean University 2024
              </Text>
              <br />
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  gap: "4",
                  justifyContent: "center",
                }}
              >
                <Link href="https://github.com/josephWaldron" target="_blank">
                  <Button colorScheme="green">Github</Button>
                </Link>{" "}
                <div style={{ width: "1em" }}></div>{" "}
                {/* add a div for spacing */}
                <Link
                  href="https://portfolio-site-delta-seven.vercel.app/"
                  target="_blank"
                >
                  <Button colorScheme="blue">Portfolio</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Text fontSize="4xl" color="#f3d503">
          Research Poster
        </Text>
        <br />
        <Image src={poster} alt="Research poster" borderRadius={7} />
        <Text fontSize="4xl" color="#f3d503">
          Abstract
        </Text>
        <Text fontSize="2xl" style={{ textIndent: "2em" }} textAlign="left">
          This research aims to utilize data mining techniques to examine the
          meta evolution (the strategies used in top levels of play that result
          in the best performance) in Riot Games’ popular online strategy game,
          Team Fight Tactics (TFT). Focusing on the top 500 players, this
          research will explore how alterations in the game's balance will
          influence the TFT meta and how players will adapt to these changes.
          The data for the analysis will be gathered from the Riot API using a
          Python program run on a Windows-based server and saved to a MySQL
          database on a Linux-based server, offering a comprehensive and
          in-depth large dataset with thousands of games that are critical for
          this research. The findings of this research will provide valuable
          insights into the impact of game balance on the player base of TFT.
          These insights can predict future meta-shifts and inform the
          development team how small changes can affect their game balance. The
          results will also contribute to the broader understanding of how
          balancing changes can lead to substantial shifts in the meta over
          time.
        </Text>
      </div>
    </>
  );
};

export default About;
