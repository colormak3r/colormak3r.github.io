import Article from "./components/article";
import SquareImageButton from "./components/button-img-square";
import Image from "next/image";
import OffsetPanel from "./components/panel-offset";
import GridCard from "./components/card-grid";
import Accordion from "./components/accordion";

import GithubSvg from "../public/img/logo/github.svg";
import InstagramSvg from "../public/img/logo/instagram.svg";
import LinkedInSvg from "../public/img/logo/linkedin.svg";
import MainPanel from "./components/panel-main";

export default function Home() {
  return (
    <>
      {Introduction()}
      <br />
      {Showcase()}
      <br />
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
              <div className="text-lg text-mine-8 ">
                &quot;You&apos;ll never know if you don&apos;t go
                <br />
                You&apos;ll never shine if you don&apos;t glow&quot;
              </div>
              <div className="text-lg italic text-mine-4 ">
                — All Star (Smash Mouth)
              </div>
            </div>

            {/* // Contact Block */}
            <div className="flex flex-row space-x-2 mt-2">
              <button className="bg-mine-6 hover:bg-mine-5 text-white rounded-md p-4 font-bold text-xl">
                Contact Me
              </button>
              <SquareImageButton
                src={InstagramSvg}
                link="https://www.instagram.com/colormak3r/"
                alt="Instagram"
              />
              <SquareImageButton
                src={LinkedInSvg}
                link="https://www.linkedin.com/in/colormak3r/"
                alt="LinkedIn"
              />
              <SquareImageButton
                src={GithubSvg}
                link="https://github.com/colormak3r"
                alt="Github"
              />
            </div>
          </div>
        }
        subSection={
          <div className="my-4 md:my-0 relative aspect-square hidden md:block drop-shadow-2xl">
            <Image
              src="/img/profile/portrait.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
            />
          </div>
        }
      />
    </>
  );
}

function Showcase() {
  return (
    <>
      <Article
        header={<h1 className="text-center">◈ Project Showcases ◈</h1>}
        body={
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <GridCard
              name="Hell's Kitchen"
              src="/img/hellskitchen/hk_cover.png"
              link="/hellskitchen"
            />
            <GridCard
              name="Oddinary Farm"
              src="/img/oddinaryfarm/gameplay1.png"
              link=""
            />
            <GridCard
              name="Untitled Chess Game"
              src="/img/untitledchessgame/Banner_Itch.png"
              link=""
            />
          </div>
        }
        footer={
          <div className="flex flex-row space-x-2">
            <SquareImageButton
              src="/img/logo/unity.png"
              link="https://unity.com/"
              alt="Unity"
            />
            <SquareImageButton
              src="/img/logo/unreal.png"
              link="https://www.unrealengine.com/"
              alt="Unreal Engine"
            />
            <SquareImageButton
              src="/img/logo/blender.png"
              link="https://www.blender.org/"
              alt="Blender"
            />
          </div>
        }
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
              <div className="text-2xl font-bold text-mine-7 mb-2">
                Hello, again! I&apos;m Khoa.
              </div>
              <div className="text-lg text-mine-8">
                I'm a senior at California State University, Fullerton (CSUF),
                majoring in Computer Science with a passion for game
                development. I enjoy crafting gameplay mechanics in Unity,
                exploring procedural generation, and optimizing performance.
                Skilled in C#, C++, and x86 Assembly, I regularly use tools like
                Unity, Godot, Photoshop, and Git.
                <br />
                <br />
                As Treasurer of the CSUF Video Game Development Club, I've
                organized events and collaborated with fellow enthusiasts. I've
                also served as a Supplemental Instruction Leader, helping peers
                master challenging subjects like Computer Architecture and
                Assembly Programming.
                <br />
                <br />
                Outside of coding, you'll find me skateboarding, making sushi,
                solving Rubik's cubes, or gaming with friends. I'm always
                excited for new adventures and challenges!
              </div>
            </div>
          }
          subSection={
            <div className="relative aspect-3/4 hidden md:block">
              <Image
                src="/img/profile/about.jpeg"
                alt="Unity"
                fill
                className="rounded-md object-cover"
              />
            </div>
          }
        />
        <br />
        <Accordion
          isOpen={true}
          title="Experience"
          content={
            <ul className="list-disc">
              <li>
                <div className="flex flex-col md:flex-row justify-between text-lg font-semibold text-mine-8">
                  CSUF Video Game Development Club
                  <span className="text-right hidden md:block">Treasurer</span>
                </div>
                <div className="text-mine-4 italic text-sm md:hidden">
                  Treasurer
                </div>
              </li>
              <ul className="list-disc list-inside">
                <li>Organized club events and managed finances</li>
                <li>Collaborated with members on game projects</li>
              </ul>
              <br />
              <li>
                <div className="flex flex-col md:flex-row justify-between text-lg font-semibold text-mine-8">
                  CSUF Supplemental Instruction
                  <span className="text-right hidden md:block">Leader</span>
                </div>
                <div className="text-mine-4 italic text-sm md:hidden">
                  Leader
                </div>
              </li>
              <ul className="list-disc list-inside">
                <li>Facilitated study sessions for Computer Architecture</li>
                <li>Assisted students with Assembly Programming</li>
              </ul>
            </ul>
          }
        />
        <br />
        <Accordion
          isOpen={true}
          title="Education"
          content={
            <ul className="list-disc text-lg">
              <li>
                <div className="flex flex-col md:flex-row justify-between text-lg font-semibold text-mine-8">
                  California State University, Fullerton
                  <span className="text-right hidden md:block">
                    Sep 2022 - May 2025
                  </span>
                </div>
                <div className="text-mine-4 italic text-sm md:hidden">
                  Sep 2022 - May 2025
                </div>
              </li>
              <ul className="list-disc list-inside text-jus">
                <li>Bachelor of Science in Computer Science</li>
                <li>
                  Hornor: Dean’s List (Spring 23, Fall 23, Spring 24, Fall 2024)
                </li>
                <li>GPA: 3.48</li>
                <li>
                  Relevant Coursework: Data Structures, Computer Architecture,
                  Assembly Programming
                </li>
              </ul>
              <br />
              <li>
                <div className="flex flex-col md:flex-row justify-between text-lg font-semibold text-mine-8">
                  Orange Coast College
                  <span className="text-right hidden md:block">
                    Sep 2019 - May 2022
                  </span>
                </div>
                <div className="text-mine-4 italic text-sm md:hidden">
                  Sep 2019 - May 2022
                </div>
              </li>
              <ul className="list-disc list-inside">
                <li>Associate of Science in Computer Science</li>
                <li>Honors: Honor&apos;s List (4 semesters)</li>
                <li>GPA: 3.12</li>
              </ul>
            </ul>
          }
        />
      </MainPanel>
    </>
  );
}
