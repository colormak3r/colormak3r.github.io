import Accordion from "../components/accordion";
import List from "../components/list";
import GameProject from "../components/project-game";
import TextLink from "../components/text-link";
import Title from "../components/title";
import { createImageItem} from "../helper";
import Button from "../components/button";
import Space from "../components/space";
import Timeline from "../components/timeline";

const carouselItems = [
  createImageItem("/img/hellskitchen/hk1.png"),
  createImageItem("/img/hellskitchen/hk2.png"),
  createImageItem("/img/hellskitchen/hk3.png"),
  createImageItem("/img/hellskitchen/hk4.png"),
];

export default function HellsKitchen() {
  return (
    <>
      <GameProject
        title="Hell's Kitchen"
        subTitle="Restaurant Management Game"
        banner="/img/hellskitchen/hk_title.png"
        alt="Hell's Kitchen"
        carouselItems={carouselItems}
        gameOverview={{
          role: "Programmer",
          teamSize: 4,
          engine: "Unity",
          platform: "Window, Web, Mobile",
          tools: "Aseprite, Git",
        }}
        footer={
          <div className="flex flex-row space-x-2">
            <Button
              href="https://rygys-games.itch.io/hells-kitchen"
              text="Play Now"
            />
          </div>
        }
        mainPanel={
          <>
            <Accordion
              isOpen={true}
              title="About This Project"
              content={
                <>
                  Hell&apos;s Kitchen was created during the Ludum Dare 51 Game Jam
                  in 2022. Developed over three days, it was then published on
                  itch.io, ranking 466th out of 2,420 submissions. The game
                  received numerous reviews, including constructive feedback
                  from a popular streamer.
                  <br />
                  <Space size={0.5} />
                  <TextLink
                    href="https://ldjam.com/events/ludum-dare/51/hells-kitchen"
                    text="Check out Hell's Kitchen original Ludum Dare 51 submission"
                    className="font-semibold"
                  />
                </>
              }
            />
            <Space size={1} />
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
                      <li>Time Constraint</li>
                      <li>Game Design</li>
                      <li>Game Balancing</li>
                    </List>
                    <Space size={0.5} />
                    <li>
                      <Title>Skills Learned</Title>
                    </li>
                    <List>
                      <li>Scope Management</li>
                      <li>Object Pooling Optimization Pattern</li>
                      <li>Responsive UI</li>
                      <li>Touch support for multiple devices and platform</li>
                    </List>
                    <Space size={0.5} />
                    <li>
                      <Title>Future Plans</Title>
                    </li>
                    <List>
                      <li>Steam Release</li>
                      <li>Adventure Mode</li>
                      <li>Time Trial Mode</li>
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
            <Timeline items={[
              { date: "2022", title: "Game Jam" },
              { date: "2024", title: "Showcase at GDC" },
              { date: "Present", title: "Continuous Development" },
            ]} />
          </>
        }
      />
    </>
  );
}
