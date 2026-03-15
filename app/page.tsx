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
import TextFlowSubtitle from "./components/text-flow-subtitle";

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
                I&apos;ve been creating video game prototypes for as long as I can remember, and I’m currently working on my most ambitious project yet: Oddinary Farm. I specialize in Unity, particularly Netcode for GameObjects, and strive to build gameplay experiences that go beyond just tech demos, focusing on performance, scalability, and maintainable systems.
                <br />
                <br />
                Beyond game development, I&apos;m also passionate about web development, especially using modern frameworks like Next.js, React, and Tailwind CSS. My skills in C#, C++, and x86 Assembly have been proven through rigorous coursework at California State University, Fullerton (CSUF), where I achieved top-of-the-class recognition in Computer Architecture.
                <br />
                <br />
                As Treasurer of the CSUF Video Game Development Club, I organized events, managed finances, and secured over $13,000 in funding for the club. I also served as a Supplemental Instruction Leader at CSUF, helping peers master challenging subjects such as Computer Architecture and Assembly Programming.
                <br />
                <br />
                Outside of the computer world, you&apos;ll find me skateboarding, making sushi, solving Rubik's cubes, or spoiling my terrier-chihuahua, Roxy!
                <br />
                <br />
                <i>
                  I&apos;m always looking forward to new adventures and challenges!
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
            title="Gameplay Systems Programmer | Spring Rolls Studio"
            content="September 2024 - Present"
          />
          <TextFlowSubtitle
            title="Oddinary Farm – Multiplayer Arcade Survival Game"
            content="Santa Ana, CA"
          />
          <List>
            <li>
              Indie game ranked 199/1066 in BOG’s Rising Ride Challenge and
              Semi-Finalist at IEEE GameSig 2025.
            </li>
            <li>
              Developed core multiplayer gameplay systems using Unity and Netcode
              for GameObjects, supporting up to 8 concurrent players.
            </li>
            <li>
              Architected foundational gameplay systems, including inventory
              management, entity health/state systems, combat interactions, status
              effects, and death/respawn logic.
            </li>
            <li>
              Implemented network synchronization and authoritative game state
              handling for multiplayer gameplay.
            </li>
            <li>
              Developed a procedural water flooding shader using Unity Shader Graph
              to simulate the end-of-session island flood event.
            </li>
            <li>
              Coordinated cross-disciplinary development by directing art, music,
              and narrative integration.
            </li>
          </List>

          <Space size={0.5} />

          <TextFlowTitle
            title="Full-Stack Software Engineer | Fortune Ink"
            content="August 2025 - November 2025"
          />
          <TextFlowSubtitle
            title="Attendance Tracker - Full-Stack Web Application"
            content="Garden Grove, CA"
          />
          <List>
            <li>
              Built a full-stack employee attendance platform using NestJS,
              TypeORM, PostgreSQL, React, Tailwind CSS, and DaisyUI, supporting
              50+ daily users across multiple locations with facial-recognition
              check-in/out via Amazon Rekognition.
            </li>
            <li>
              Developed secure JWT-based role access control, approval workflows,
              timesheet/leave tracking, REST APIs, and Dockerized backend services
              to support scalable attendance operations and future payroll
              integration.
            </li>
          </List>

          <Space size={0.5} />

          <TextFlowTitle
            title="STEAM Instructor | Dream for Schools"
            content="January 2026 - Present"
          />
          <TextFlowSubtitle
            title="K-8 Robotics - After School Program"
            content="Santa Ana, CA"
          />
          <List>
            <li>
              Taught introductory programming and computer science concepts to
              1st–5th grade students through hands-on Sphero robotics activities
              covering algorithms, events, conditionals, variables, sensors, and
              functions.
            </li>
            <li>
              Led classes of up to 20 students, guiding debugging, problem
              decomposition, and collaboration while adapting lessons to support
              early learners building their own robot activities.
            </li>
          </List>

          <Space size={0.5} />

          <TextFlowTitle
            title="Supplemental Instruction Leader | California State University, Fullerton"
            content="January 2024 - May 2025"
          />
          <TextFlowSubtitle
            title="Computer Organization and Assembly Language - Computer Science Course"
            content="Fullerton, CA"
          />
          <List>
            <li>
              Led weekly Supplemental Instruction sessions for up to 20 students,
              reinforcing computer organization and assembly language concepts
              through guided problem-solving, mini-lectures, and collaborative
              exercises.
            </li>
            <li>
              Helped improve student performance by teaching study strategies, exam
              preparation, and low-level programming fundamentals, contributing to
              average grade gains of up to one letter grade among regular
              attendees.
            </li>
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
