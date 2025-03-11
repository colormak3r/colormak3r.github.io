import Article from "../components/article";
import OffsetPanel from "../components/panel-offset";
import TextFlow from "../components/text-flow";
import ImageAspect from "../components/image-aspect";
import MainPanel from "../components/panel-main";
import ThumbCarousel from "../components/carousel";
import CarouselImage from "../components/carousel-img";
import Accordion from "../components/accordion";

const carouselItems = [
  {
    main: (
      <CarouselImage src="/img/hellskitchen/hk1.png" alt="Hell's Kitchen" />
    ),
    thumb: (
      <CarouselImage src="/img/hellskitchen/hk1.png" alt="Hell's Kitchen" />
    ),
  },
  {
    main: (
      <CarouselImage src="/img/hellskitchen/hk2.png" alt="Hell's Kitchen" />
    ),
    thumb: (
      <CarouselImage src="/img/hellskitchen/hk2.png" alt="Hell's Kitchen" />
    ),
  },
  {
    main: (
      <CarouselImage src="/img/hellskitchen/hk3.png" alt="Hell's Kitchen" />
    ),
    thumb: (
      <CarouselImage src="/img/hellskitchen/hk3.png" alt="Hell's Kitchen" />
    ),
  },
  {
    main: (
      <CarouselImage src="/img/hellskitchen/hk4.png" alt="Hell's Kitchen" />
    ),
    thumb: (
      <CarouselImage src="/img/hellskitchen/hk4.png" alt="Hell's Kitchen" />
    ),
  },
  {
    main: (
      <CarouselImage src="/img/hellskitchen/hk1.png" alt="Hell's Kitchen" />
    ),
    thumb: (
      <CarouselImage src="/img/hellskitchen/hk1.png" alt="Hell's Kitchen" />
    ),
  },
  {
    main: (
      <CarouselImage src="/img/hellskitchen/hk2.png" alt="Hell's Kitchen" />
    ),
    thumb: (
      <CarouselImage src="/img/hellskitchen/hk2.png" alt="Hell's Kitchen" />
    ),
  },
  {
    main: (
      <CarouselImage src="/img/hellskitchen/hk3.png" alt="Hell's Kitchen" />
    ),
    thumb: (
      <CarouselImage src="/img/hellskitchen/hk3.png" alt="Hell's Kitchen" />
    ),
  },
  {
    main: (
      <CarouselImage src="/img/hellskitchen/hk4.png" alt="Hell's Kitchen" />
    ),
    thumb: (
      <CarouselImage src="/img/hellskitchen/hk4.png" alt="Hell's Kitchen" />
    ),
  },
];

export default function HellsKitchen() {
  return (
    <>
      <Article
        header={
          <>
            <h1 className="text-4xl font-bold text-mine-7">
              Hell&apos;s Kitchen
            </h1>
            <h1 className="text-lg italic font-light text-mine-5 justify-center">
              Restaurant Management Game
            </h1>
          </>
        }
        body={
          <OffsetPanel
            isLeft={true}
            mainSection={
              <div className="bg-gradient-to-b from-mine-4 to-mine-2 rounded-md p-1 flex flex-col">
                <ThumbCarousel items={carouselItems} />
              </div>
            }
            subSection={
              <div className="bg-gradient-to-b from-mine-4 to-mine-2 rounded-md p-1 flex flex-col">
                <ImageAspect
                  src="/img/hellskitchen/hk_title.png"
                  alt="Hell's Kitchen"
                  aspectRatio="4/3"
                  frameStyle="mb-2 aspect-4/3"
                />
                <TextFlow title="Role" content="Programmer" />
                <TextFlow title="Team Size" content="4" />
                <TextFlow title="Engine" content="Unity" />
                <TextFlow title="Platform" content="Window, Web, Mobile" />
                <TextFlow title="Tool Used" content="Aseprite, Git" />
              </div>
            }
          />
        }
        footer={
          <>
            <div className="flex flex-row space-x-2">
              <div className="p-4 text-xl font-semibold bg-mine-5 rounded-md">
                Play Now
              </div>
            </div>
          </>
        }
      />
      <br />
      <MainPanel>
        <Accordion
          isOpen={true}
          title="About This Project"
          content="Hell's Kitchen was created during the Ludum Dare 51 Game Jam in 2022. Developed over three days, it was then published on itch.io, ranking 466th out of 2,420 submissions. The game received numerous reviews, including constructive feedback from a popular streamer."
        />
      </MainPanel>
    </>
  );
}
