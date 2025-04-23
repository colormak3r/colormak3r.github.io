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

const carouselItems = [
  createVideoItem(
    "https://www.youtube.com/embed/vmm6SdUHdJI?si=fEa4yWDoM_YaMcKW"
  ),
  createVideoItem(
    "https://www.youtube.com/embed/TVVrIljROPg?si=FT66TJEg5zmfAiRr"
  ),
  createImageItem("/img/oddinaryfarm/gameplay1.jpg"),
  createImageItem("/img/oddinaryfarm/gameplay2.jpg"),
];

export const metadata: Metadata = {
  title: "Oddinary Farm | Khoa Nguyen's Portfolio",
  description: "Farming Arcade Game",
  openGraph: {
    title: "Oddinary Farm | Khoa Nguyen's Portfolio",
    description:
      "Farm during the day, protect it through the night, and team up with friends to escape an imminent flood on an island filled with quirky animals and plants.",
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
          <div className="flex flex-row space-x-2">
            <Button
              href="https://colormak3r.itch.io/oddinary-farm"
              text="Play Now"
            />
          </div>
        }
        mainPanel={
          <>
            <Accordion
              title="About This Project"
              content={
                <>
                  <b>Oddinary Farm</b> is a 2D top-down, arcade-style,
                  multiplayer-enabled game that blends farming, base defense,
                  and escape mechanics into one chaotic and charming adventure.
                  By day, players grow crops, raise quirky animals, and explore
                  a procedurally generated island filled with strange flora and
                  fauna. By night, they must defend their farm from waves of
                  alien invaders using pets, turrets, and teamwork. The ultimate
                  goal? Gather enough coins to build a hot air balloon and
                  escape before the island is swallowed by a rising flood. Each
                  island introduces new biomes, odd creatures, and unique
                  challenges, with unlockable pets and surprises awaiting those
                  who survive. With its blend of action, strategy, and
                  unpredictable moments, Oddinary Farm lives by one motto:
                  &quot;Life has its odd ways.&quot;
                </>
              }
            />
            <Space size={0.5} />
            <Accordion
              title="Features"
              content={
                <>
                  <Title>Steam Integration</Title>
                  With Steam integration, the players can now conveniently
                  connect and play with their friends through their favorite
                  game distributor
                  <CarouselVideo src="https://www.youtube.com/embed/TVVrIljROPg?si=FT66TJEg5zmfAiRr" />
                  <Space size={0.5} />
                  <Title>Chunk System</Title>
                  As part of the procedural generation system, the chunk system
                  leverage the Object Pooling optimization patern to spawn and
                  despawn the tile map on the fly.
                  <CarouselVideo src="https://www.youtube.com/embed/GYxYPpul2N8?si=uXxJtDrSbokzCJO4" />
                  <Space size={0.5} />
                  <Title>Day and Night Cycle</Title>
                  The day and night cycle system is implemented to provide
                  unique gameplay experience for the player.
                  <Space size={0.5} />
                </>
              }
            />
            <Space size={0.5} />
            <Accordion
              isOpen={true}
              title="Development Process"
              content={
                <>
                  <List>
                    <li>
                      <Title>Challenges</Title>
                    </li>
                    <List>
                      <li>Multiplayer</li>
                      <li>Game Design</li>
                      <li>Game Balancing</li>
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
                      <li>Leader Board</li>
                      <li>Achivement</li>
                    </List>
                  </List>
                </>
              }
            />
          </>
        }
        subPanel={
          <>
            <MainPanel>
              <Accordion
                title="Timeline"
                content={
                  <>
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
                  </>
                }
              />
            </MainPanel>
            <Space size={1} />
            <MainPanel>
              <Accordion
                title="Team Members"
                content={
                  <List>
                    <li>
                      <Title>Programming</Title>
                    </li>
                    <List>
                      <li>Khoa Nguyen</li>
                      <li>Emily Tsai</li>
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
                  </List>
                }
              />
            </MainPanel>
          </>
        }
      />
    </>
  );
}
