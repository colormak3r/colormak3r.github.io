import Article from "../components/article";
import OffsetPanel from "../components/panel-offset";
import TextSpan from "./text-span";
import ImageAspect from "../components/image-aspect";
import MainPanel from "../components/panel-main";
import ThumbCarousel, { CarouselItem } from "../components/carousel";
import { ReactNode } from "react";
import Space from "./space";

export interface GameOverview {
  role: string;
  teamSize: number;
  engine: string;
  platform: string;
  tools: string;
}

export default function GameProject({
  title,
  subTitle,
  banner,
  alt,
  carouselItems,
  gameOverview,
  footer,
  gamePanel,
  mainPanel,
  subPanel,
}: {
  title: string;
  subTitle: string;
  banner: string;
  alt: string;
  carouselItems: CarouselItem[];
  gameOverview: GameOverview;
  footer: ReactNode;
  gamePanel?: ReactNode;
  mainPanel: ReactNode;
  subPanel: ReactNode;
}) {
  return (
    <>
      <Article
        header={
          <>
            <h1 className="text-4xl font-bold text-mine-7">{title}</h1>
            <h1 className="text-lg italic font-light text-mine-5 justify-center">
              {subTitle}
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
                  src={banner}
                  alt={alt}
                  aspectRatio="4/3"
                  className="mb-2 aspect-4/3"
                />
                <TextSpan title="Role" content={gameOverview.role} />
                <TextSpan title="Team Size" content={gameOverview.teamSize} />
                <TextSpan title="Engine" content={gameOverview.engine} />
                <TextSpan title="Platform" content={gameOverview.platform} />
                <TextSpan title="Tool Used" content={gameOverview.tools} />
              </div>
            }
          />
        }
        footer={
          <>
            <div className="flex flex-row space-x-2">{footer}</div>
          </>
        }
      />
      <Space size={1} />
      {gamePanel && (
        <>
          <MainPanel>{gamePanel}</MainPanel>
          <Space size={1} />
        </>
      )}
      <OffsetPanel
        isLeft={true}
        mainSection={<MainPanel>{mainPanel}</MainPanel>}
        subSection={<MainPanel>{subPanel}</MainPanel>}
      />
    </>
  );
}
