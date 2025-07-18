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
import Skills from "./components/skills";
import ButtonModal from "./components/modal-button";
import TextSpan from "./components/text-span";
import TextLink from "./components/text-link";

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
                <ButtonModal
                  text="Contact Me"
                  title="Contact Information"
                  content={
                    <>
                      <div className="w-full p-2">
                        <TextSpan title="Name" content={"Khoa Nguyen"} />
                        <TextSpan
                          title="Email"
                          content={"hello@colormak3r.dev"}
                        />
                        <TextSpan
                          title="Location"
                          content={"Santa Ana, California"}
                        />
                        <div className="flex flex-row justify-end">
                          <TextLink
                            text="My Resume"
                            href="https://docs.google.com/document/d/1MKQN3tC2TXtfTmUJtJJb2XXopP8bWXEDKyaKVfHPs-4/edit?usp=sharing"
                          />
                        </div>
                      </div>
                    </>
                  }
                />
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
                I recently graduated from California State University, Fullerton
                (CSUF) with a major in Computer Science. I&apos;ve been creating
                video game prototypes for as long as I can remember. I enjoy
                crafting gameplay mechanics in Unity, exploring procedural
                generation, and developing multiplayer systems and code.
                <br />
                <br />
                Beyond game development, I&apos;m also passionate about web
                development, especially using modern frameworks like Next.js,
                React, and Tailwind CSS. My skills in C#, C++, and x86 Assembly
                have been proven through rigorous coursework at CSUF, where I
                achieved top-of-the-class recognition in Computer Architecture.
                <br />
                <br />
                As Treasurer of the CSUF Video Game Development Club, I
                organized events, managed finances, and secured over $13,000 in
                funding for the club. I also served as a Supplemental
                Instruction Leader, helping peers master challenging subjects
                such as Computer Architecture and Assembly Programming.
                <br />
                <br />
                Outside of the computer world, you&apos;ll find me
                skateboarding, making sushi, solving Rubik&apos;s cubes, or
                gaming with friends.
                <br />
                <br />
                <i>
                  I&apos;m always looking forward to new adventures and
                  challenges!
                </i>
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
        <Accordion title="Experience">
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
        </Accordion>
        <Space size={1} />
        <Accordion title="Education">
          <TextFlowTitle
            title="California State University, Fullerton"
            content="Aug 2021 - May 2025"
          />
          <List>
            <li>Bachelor of Science in Computer Science</li>
            <li>
              Hornor: Dean’s List (Spring 23, Fall 23, Spring 24, Fall 24,
              Spring 25)
            </li>
            <li>GPA: 3.49</li>
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
        </Accordion>
      </MainPanel>
    </>
  );
}
