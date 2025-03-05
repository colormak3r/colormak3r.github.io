import Article from "./components/article";
import SquareImageButton from "./components/button-img-square";
import Image from "next/image";
import OffsetPanel from "./components/panel-offset";

export default function Home() {
  return (
    <>
      {Introduction()}
      {Showcase()}
    </>
  );
}

function Introduction() {
  return (
    <>
      <OffsetPanel
        isLeft={true}
        twoThrids={
          <div className="flex flex-col justify-between h-full">
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
            <div className="flex flex-col border-l-6 border-mine-4 py-4 pl-4 mt-2 ">
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
              <button className="bg-mine-6 text-white rounded-md p-4 font-bold text-xl">
                Contact Me
              </button>
              <SquareImageButton
                src="/img/logo/instagram.png"
                link="https://www.instagram.com/colormak3r/"
                alt="Instagram"
              />
              <SquareImageButton
                src="/img/logo/linkedin.png"
                link="https://www.linkedin.com/in/colormak3r/"
                alt="LinkedIn"
              />
              <SquareImageButton
                src="/img/logo/github.png"
                link="https://github.com/colormak3r"
                alt="Github"
              />
            </div>
          </div>
        }
        oneThird={
          <div className="my-4 md:my-0 relative aspect-square hidden md:block">
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
          <p className="text-mine-8">
            I am a student at the University of California, Irvine studying
            Computer Game Science. I have a passion for creating video games and
            have been doing so since I was a child. I am proficient in C++, C#,
            Python, and Java. I have experience with Unity, Unreal Engine, and
            Blender. I am also familiar with Git, Visual Studio, and JetBrains
            products. I am currently seeking an internship or co-op position in
            game development.
          </p>
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
