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

const carouselItems = [
  createVideoItem(
    "https://www.youtube.com/embed/TVVrIljROPg?si=FT66TJEg5zmfAiRr"
  ),
  createImageItem("/img/oddinaryfarm/gameplay1.jpg"),
  createImageItem("/img/oddinaryfarm/gameplay2.jpg"),
];

export default function OddinaryFarm() {
  return (
    <>
      <GameProject
        title="Oddinary Farm"
        subTitle="Farming Survival Game"
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
                  Oddinary Farm is a multiplayer arcade-style game that invites
                  players into a bizarre procedurally generated world of EARTH
                  II. Players must gather coins through crop cultivation and
                  monster battles to construct an air balloon, their ultimate
                  ticket to escape the gathering storm on the horizon. Along the
                  way, they will encounter peculiar animals, both big and small,
                  whose odd appearances challenge their expectations. The
                  journey grows increasingly chaotic as friends team up against
                  waves of strange creatures in each new biome reached by air
                  travel. As players level up, a unique story unfolds, reminding
                  them at every turn that &quot;Life has its odd ways.&quot;
                </>
              }
            />
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
            <Title>Timeline</Title>
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
    </>
  );
}
