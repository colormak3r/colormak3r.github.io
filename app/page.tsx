import Article from "./components/article";
import OffsetPanel from "./components/panel-offset";
import GridCard from "./components/card-grid";
import Accordion from "./components/accordion";
import MainPanel from "./components/panel-main";
import TextFlowTitle from "./components/text-flow-title";
import List from "./components/list";
import ImageButton from "./components/button-img";

import GithubSvg from "../public/img/logo/github.svg";
import InstagramSvg from "../public/img/logo/instagram.svg";
import LinkedInSvg from "../public/img/logo/linkedin.svg";
import ImageAuto from "./components/image-auto";
import Space from "./components/space";
import Button from "./components/button";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      {Introduction()}
      <Space size={1} />
      {Showcase()}
      <Space size={1} />
      {AboutMe()}
    </>
  );
}

function Introduction() {
  return (
    <>
      <OffsetPanel
        isLeft={false}
        mainSection={
          <>
            <div className="flex flex-col justify-around h-full space-x-2">
              {/* // Name & Title Block */}
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-mine-7 items-center">
                  Hello, world!&nbsp;
                  <br className="md:hidden" />
                  My name is
                  <span className="text-mine-1 rounded-xl bg-mine-7 px-1 mx-2">
                    Khoa
                  </span>
                </div>
                <div className="text-xl italic text-mine-4 ">
                  Aspiring Game Developer
                </div>
              </div>

              {/* // Quote Block */}
              <div className="flex flex-col border-l-6 border-mine-4 py-4 pl-4 md:ml-4 my-2 ">
                <div className="text-lg">
                  &quot;You&apos;ll never know if you don&apos;t go
                  <br />
                  You&apos;ll never shine if you don&apos;t glow&quot;
                </div>
                <div className="text-lg italic text-mine-4 ">
                  — All Star (Smash Mouth)
                </div>
              </div>

              {/* // Contact Block */}
              <div className="flex flex-row space-x-2 mt-2 items-center">
                <Button href="" text="Contact Me" />
                <ImageButton
                  src={InstagramSvg}
                  link="https://www.instagram.com/colormak3r/"
                  alt="Instagram"
                />
                <ImageButton
                  src={LinkedInSvg}
                  link="https://www.linkedin.com/in/colormak3r/"
                  alt="LinkedIn"
                />
                <ImageButton
                  src={GithubSvg}
                  link="https://github.com/colormak3r"
                  alt="Github"
                />
              </div>
            </div>
          </>
        }
        subSection={
          <>
            <ImageAuto
              src="/img/profile/portrait.jpg"
              aspectRatio="1/1"
              alt="Profile"
              pilled={true}
            />
          </>
        }
      />
    </>
  );
}

function Showcase() {
  return (
    <>
      <Article
        header={
          <h1
            id="showcase"
            style={{ scrollMarginTop: "8rem" }}
            className="text-center"
          >
            ◈ Project Showcases ◈
          </h1>
        }
        body={
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <GridCard
              name="Oddinary Farm"
              src="/img/oddinaryfarm/gameplay1.jpg"
              link="/oddinary-farm"
            />
            <GridCard
              name="Untitled Chess Game"
              src="/img/untitledchessgame/review_thumbnail.png"
              link="/untitled-chess-game"
            />
            <GridCard
              name="Hell's Kitchen"
              src="/img/hellskitchen/hk_cover.png"
              link="/hells-kitchen"
            />
          </div>
        }
        footer={<Skills />}
      />
    </>
  );
}

function AboutMe() {
  return (
    <>
      <MainPanel>
        <OffsetPanel
          isLeft={true}
          mainSection={
            <div className="flex flex-col md:ml-2">
              <div
                id="about"
                style={{ scrollMarginTop: "8rem" }}
                className="text-2xl font-bold text-mine-7 mb-2"
              >
                Hello, again! I&apos;m Khoa.
              </div>
              <div className="text-lg">
                I&apos;m a senior at California State University, Fullerton
                (CSUF), majoring in Computer Science with a passion for game
                development. I enjoy crafting gameplay mechanics in Unity,
                exploring procedural generation, and optimizing performance.
                Skilled in C#, C++, and x86 Assembly, I regularly use tools like
                Unity, Godot, Photoshop, and Git.
                <br />
                <br />
                As Treasurer of the CSUF Video Game Development Club, I&apos;ve
                organized events and collaborated with fellow enthusiasts.
                I&apos;ve also served as a Supplemental Instruction Leader,
                helping peers master challenging subjects like Computer
                Architecture and Assembly Programming.
                <br />
                <br />
                Outside of coding, you&apos;ll find me skateboarding, making
                sushi, solving Rubik&apos;s cubes, or gaming with friends.
                I&apos;m always excited for new adventures and challenges!
              </div>
            </div>
          }
          subSection={
            <>
              <ImageAuto
                src="/img/profile/about.jpg"
                aspectRatio="3/4"
                alt="My Photo"
              />
            </>
          }
        />
        <br />
        <Accordion
          isOpen={true}
          title="Experience"
          content={
            <>
              <TextFlowTitle
                title="CSUF Video Game Development Club Treasurer"
                content="Jan 2023 - Present"
              />
              <List>
                <li>Organized club events and managed finances</li>
                <li>Collaborated with members on game projects</li>
              </List>
              <Space size={0.5} />
              <TextFlowTitle
                title="CSUF Supplemental Instruction Leader"
                content="Jan 2024 - Present"
              />
              <List>
                <li>Facilitated study sessions for Computer Architecture</li>
                <li>Assisted students with Assembly Programming</li>
              </List>
            </>
          }
        />
        <Space size={1} />
        <Accordion
          isOpen={true}
          title="Education"
          content={
            <>
              <TextFlowTitle
                title="California State University, Fullerton"
                content="Aug 2021 - Present"
              />
              <List>
                <li>Bachelor of Science in Computer Science</li>
                <li>
                  Hornor: Dean’s List (Spring 23, Fall 23, Spring 24, Fall 2024)
                </li>
                <li>GPA: 3.48</li>
                <li>
                  Relevant Coursework: Data Structures, Computer Architecture,
                  Assembly Programming
                </li>
              </List>
              <Space size={0.5} />
              <TextFlowTitle
                title="Orange Coast College"
                content="Aug 2019 - May 2021"
              />
              <List>
                <li>Associate of Science in Computer Science</li>
                <li>Honors: Honor&apos;s List (4 semesters)</li>
                <li>GPA: 3.12</li>
              </List>
            </>
          }
        />
      </MainPanel>
    </>
  );
}
