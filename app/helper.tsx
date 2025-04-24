import CarouselImage from "./components/carousel-img";
import CarouselVideo from "./components/carousel-video";

// Helper function to extract YouTube video ID and generate its thumbnail URL
// See: https://stackoverflow.com/questions/18681788/how-to-get-a-youtube-thumbnail-from-a-youtube-iframe
const getYoutubeThumbnail = (url: string): string => {
  // This regex matches the video id in a URL like "https://www.youtube.com/embed/{videoId}?..."
  // Must have embed in the URL or youtube will refuse to connect
  const match = url.match(/youtube\.com\/embed\/([^?]+)/);
  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/0.jpg`;
  }
  return "";
};

export const createImageItem = (src: string, alt = "Project's image") => ({
  main: <CarouselImage src={src} alt={alt} />,
  thumb: (
    <CarouselImage src={src} alt={alt} clickable={false} forcedCover={true} />
  ),
});

export const createVideoItem = (src: string, alt = "Project's image") => ({
  main: <CarouselVideo src={src} />,
  thumb: (
    <CarouselImage
      src={getYoutubeThumbnail(src)}
      alt={alt}
      clickable={false}
      forcedCover={true}
    />
  ),
});
