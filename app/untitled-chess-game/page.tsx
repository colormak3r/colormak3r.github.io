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
  createImageItem("/img/untitledchessgame/gameplay1.png"),
  createImageItem("/img/untitledchessgame/gameplay2.png"),
];

export default function UntitledChessGame() {
  return (
    <>
      <GameProject
        title="Untitled Chess Game"
        subTitle="Survival Puzzle Chess Game"
        banner="/img/untitledchessgame/Banner_Itch.png"
        alt="Untitled Chess Game"
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
              href="https://colormak3r.itch.io/untitled-chess-game"
              text="Play Now"
            />
          </div>
        }
        gamePanel={
          <>
            <iframe
              src="https://itch.io/embed-upload/7901780?color=1e1d39"
              allowFullScreen={true}
              width="100%"
              style={{ aspectRatio: '960/740' }}
              className="rounded-md"
            >
              {/* <a href="https://colormak3r.itch.io/untitled-chess-game">
                Play Untitled Chess Game on itch.io
              </a> */}
            </iframe>
            <Space size={1} />
            <Title>Rules</Title>
            <List>
              <li>
                Move the player by clicking on the blue tiles around them.
              </li>
              <li>Hover over the chess pieces to see their next move.</li>
              <li>
                As you move, keep an eye on your heart count, which will
                decrease by 1
              </li>
              <li>
                Defeat a chess piece to gain their movement and regain hearts.
              </li>
              <li>
                If your heart count reaches zero or someone steps on you,
                it&apos;s game over.
              </li>
            </List>
          </>
        }
        mainPanel={
          <>
            <Accordion
              title="About This Project"
              content={
                <>
                  Untitled Chess Game was created during the VGDC 2023 Game Jam.
                  Developed in just 10 hours, it was published on itch.io,
                  receiving many positive reviews from fellow club members.
                  Since then, the game has been updated to a more polished
                  version
                </>
              }
            />
            <Accordion
              title="Development Process"
              content={
                <>
                  <List>
                    <li>
                      <Title>Challenges</Title>
                    </li>
                    <List>
                      <li>Isometric view</li>
                      <li>Pixel Art</li>
                      <li>Time constraint (10 hours for the original build)</li>
                    </List>
                    <Space size={0.5} />
                    <li>
                      <Title>Skills Learned</Title>
                    </li>
                    <List>
                      <li>Isometric movements</li>
                      <li>Chess algorithm</li>
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
