import Accordion from "../components/accordion";
import Button from "../components/button";
import List from "../components/list";
import GameProject from "../components/project-game";
import Space from "../components/space";
import TextLink from "../components/text-link";
import Timeline from "../components/timeline";
import Title from "../components/title";
import { createVideoItem, createImageItem } from "../helper";

const carouselItems = [
  createVideoItem(
    "https://www.youtube.com/embed/GYxYPpul2N8?si=ELIxElbwVOp8KLK7"
  ),
  createImageItem("/img/hellskitchen/hk1.png"),
  createImageItem("/img/hellskitchen/hk2.png"),
  createImageItem("/img/hellskitchen/hk3.png"),
  createImageItem("/img/hellskitchen/hk4.png"),
];

export default function OddinaryFarm() {
  return (
    <>
      <GameProject
        title="Oddinary Farm"
        subTitle="Farming Survival Game"
        banner="/img/oddinaryfarm/gameplay1.png"
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
              href="https://rygys-games.itch.io/oddinary-farm"
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
                  Oddinary Farm was created during the Ludum Dare 51 Game Jam in
                  2022. Developed over three days, it was then published on
                  itch.io, ranking 466th out of 2,420 submissions. The game
                  received numerous reviews, including constructive feedback
                  from a popular streamer.
                  <br />
                  <Space size={0.5} />
                  <TextLink
                    href="https://ldjam.com/events/ludum-dare/51/hells-kitchen"
                    text="View Ludum Dare Page"
                  />
                </>
              }
            />
            <Accordion title="Game Overview" content={<></>} />
          </>
        }
        subPanel={
          <>
            <Title>Timeline</Title>
            <Timeline
              items={[
                { date: "2022", title: "Game Jam" },
                { date: "2024", title: "Showcase at GDC" },
                { date: "Present", title: "Continuous Development" },
              ]}
            />
          </>
        }
      />
    </>
  );
}
