import type { Metadata } from "next";
import Accordion from "../components/accordion";
import Button from "../components/button";
import CarouselVideo from "../components/carousel-video";
import List from "../components/list";
import GameProject from "../components/project-game";
import Space from "../components/space";
import TextLink from "../components/text-link";
import Timeline from "../components/timeline";
import Title from "../components/title";
import { createVideoItem, createImageItem } from "../helper";
import MainPanel from "../components/panel-main";
import AutoLayout from "../components/layout-auto";

const carouselItems = [
  createVideoItem(
    "https://www.youtube.com/embed/sA_oWiO0Pno?si=6KGcoetWpzMuHi7N"
  ),
  createVideoItem(
    "https://www.youtube.com/embed/g_3NRAtEjEc?si=uzQXVDdS_V5WXYDa"
  ),
  createImageItem("/img/oddinaryfarm/gameplay1.jpg"),
  createImageItem("/img/oddinaryfarm/gameplay2.jpg"),
  createImageItem("/img/oddinaryfarm/gameplay3.jpg"),
  createImageItem("/img/oddinaryfarm/gameplay4.jpg"),
  createVideoItem(
    "https://www.youtube.com/embed/4VXSwp7Nc1k?si=1k4HcNloaM7V5s0K"
  ),
];

export const metadata: Metadata = {
  title: "Oddinary Farm | Khoa Nguyen's Portfolio",
  description: "Farming Arcade Game",
  openGraph: {
    title: "Oddinary Farm | Khoa Nguyen's Portfolio",
    description:
      "Farm during the day. Defend your farm at night. Collaborate with friends to escape an imminent flood on an island filled with quirky animals and plants.",
    url: "https://colormak3r.dev",
    images: "https://colormak3r.dev/img/oddinaryfarm/banner.png",
    type: "website",
    locale: "en_US",
  },
};

export default function OddinaryFarm() {
  return (
    <>
      <GameProject
        title="Oddinary Farm"
        subTitle="Farming Arcade Game"
        banner="/img/oddinaryfarm/banner.png"
        alt="Oddinary Farm"
        carouselItems={carouselItems}
        gameOverview={{
          role: "Programmer",
          teamSize: 8,
          engine: "Unity",
          platform: "Window",
          tools: "Aseprite, Git",
        }}
        footer={
          <>
            <AutoLayout>
              <Button
                href="https://colormak3r.itch.io/oddinary-farm"
                text="Play Now"
                style="w-full flex md:w-auto"
              />
              <Button
                href="http://forms.gle/DYbNmeGaRbPtMbmq8"
                text="Feedback"
                style="w-full md:w-auto"
              />
              <Button
                href="http://forms.gle/nJ4gDUf7jzH5Rpba8"
                text="Join Us"
                style="w-full md:w-auto"
              />
            </AutoLayout>
          </>
        }
        mainPanel={
          <>
            <Accordion title="About This Project">
              Farm during the day. Defend your farm at night. Collaborate with
              friends to escape an imminent flood on an island filled with
              quirky animals and plants in <b>Oddinary Farm</b>.
            </Accordion>
            <Space size={0.5} />
            <Accordion title="Features">
              <Title>Steam Integration</Title>
              With Steam integration, the players can now conveniently connect
              and play with their friends through their favorite game
              distributor
              <CarouselVideo src="https://www.youtube.com/embed/TVVrIljROPg?si=FT66TJEg5zmfAiRr" />
              <Space size={0.5} />
              <Title>Chunk System</Title>
              As part of the procedural generation system, the chunk system
              leverage the Object Pooling optimization patern to spawn and
              despawn the tile map on the fly.
              <CarouselVideo src="https://www.youtube.com/embed/GYxYPpul2N8?si=uXxJtDrSbokzCJO4" />
              <Space size={0.5} />
              <Title>Day and Night Cycle</Title>
              The day and night cycle system is implemented to provide unique
              gameplay experience for the player.
              <Space size={0.5} />
            </Accordion>
            <Space size={0.5} />
            <Accordion title="Development Process">
              <List>
                <li>
                  <Title>Challenges</Title>
                </li>
                <List>
                  <li>Multiplayer</li>
                  <li>Game Design</li>
                  <li>Game Balancing</li>
                  <li>Market Research</li>
                </List>
                <Space size={0.5} />
                <li>
                  <Title>Skills Learned</Title>
                </li>
                <List>
                  <li>
                    <TextLink
                      text="Unity's Netcode for GameObjects"
                      href="https://docs-multiplayer.unity3d.com/netcode/current/about/"
                    ></TextLink>
                  </li>
                  <li>Procedural Generation</li>
                  <li>AI Behavior</li>
                  <li>Day and Night Cycle</li>
                </List>
                <Space size={0.5} />
                <li>
                  <Title>Future Plans</Title>
                </li>
                <List>
                  <li>Steam Release</li>
                  <li>Leaderboard</li>
                  <li>Achievement</li>
                </List>
              </List>
            </Accordion>
          </>
        }
        subPanel={
          <>
            <MainPanel>
              <Accordion title="Timeline">
                <Timeline
                  items={[
                    { date: "2018", title: "First Iteration" },
                    { date: "2020", title: "Second Iteration" },
                    { date: "2023", title: "Third Iteration" },
                    { date: "2024", title: "Capstone Project" },
                    { date: "2025", title: "IEEE Gamesig Showcase" },
                    { date: "Present", title: "Continuous Development" },
                  ]}
                />
              </Accordion>
            </MainPanel>
            <Space size={1} />
            <MainPanel>
              <Accordion title="Team Members">
                <List>
                  <li>
                    <Title>Programming</Title>
                  </li>
                  <List>
                    <li>Khoa Nguyen</li>
                    <li>Emily Tsai</li>
                    <li>Ryan Carpenter</li>
                    <li>Logan Robertson</li>
                  </List>
                  <li>
                    <Title>Art</Title>
                  </li>
                  <List>
                    <li>Susana Garcia</li>
                    <li>Eunice Kim</li>
                    <li>Ariana Majerus</li>
                  </List>
                  <li>
                    <Title>Writing</Title>
                  </li>
                  <List>
                    <li>Angelica Atega Gangoso</li>
                  </List>
                  <li>
                    <Title>Sound</Title>
                  </li>
                  <List>
                    <li>Ariana Majerus</li>
                  </List>
                  <li>
                    <Title>Market Research</Title>
                  </li>
                  <List>
                    <li>Roby Ho</li>
                  </List>
                </List>
              </Accordion>
            </MainPanel>
          </>
        }
      />
    </>
  );
}
