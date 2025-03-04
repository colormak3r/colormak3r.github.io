import Navbar from "~/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-auto min-h-screen bg-gradient-to-b from-mine-1 to-mine-2 flex flex-col items-center">
        <div className="flex flex-col md:flex-row w-4/5 max-w-5xl my-6">
          {/* Two thirds */}
          <div className="flex flex-col justify-between md:w-2/3 ">
            {/* // Name & Title Block */}
            <div className="flex flex-col">
              <div className="flex flex-row text-4xl font-bold text-mine-7 items-center">
                Hello, world! My name is {' '}
                <div className="text-mine-1 rounded-xl bg-mine-7 p-1 py-2 my-2 md:my-0">
                  Khoa
                </div>
              </div>
              <div className="text-xl italic text-mine-4 ">
                Aspiring Game Developer
              </div>
            </div>

            {/* // Quote Block */}
            <div className="flex flex-col border-l-6 border-mine-4 py-8 pl-4 mt-4 ">
              <div className="text-lg text-mine-8 ">
                "You'll never know if you don't go
                <br />
                You'll never shine if you don't glow"
              </div>
              <div className="text-lg italic text-mine-4 ">
                — All Star (Smash Mouth)
              </div>
            </div>

            {/* // Contact Block */}
            <div className="flex flex-row space-x-2">
              <button className="bg-mine-6 text-white rounded-md p-3 mt-4 font-bold text-xl">
                Contact Me{" "}
              </button>
              <button className="bg-mine-4 text-mine-8 rounded-md p-2 mt-4 aspect-square">
                <img
                  src="img/logo/instagram.png"
                  alt="Instagram"
                  className="w-10 aspect-square object-cover"
                />
              </button>
              <button className="bg-mine-4 text-mine-8 rounded-md p-2 mt-4 aspect-square">
                <img
                  src="img/logo/linkedin.png"
                  alt="LinkedIn"
                  className="w-10 aspect-square object-cover"
                />
              </button>
              <button className="bg-mine-4 text-mine-8 rounded-md p-2 mt-4 aspect-square">
                <img
                  src="img/logo/github.png"
                  alt="Github"
                  className="w-10 aspect-square object-cover"
                />
              </button>
            </div>
          </div>
          {/* One third */}
          <div className="md:w-1/3 my-4 md:my-0">
            <img
              src="img/profile/portrait.jpg"
              alt="Profile"
              className="rounded-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </>
  );
}
