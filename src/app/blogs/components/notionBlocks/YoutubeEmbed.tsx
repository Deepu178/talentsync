type Props = {
  url: string;
};

export default function YoutubeEmbed({ url }: Props) {
  return (
    <iframe
      className="block w-full h-full mx-auto aspect-video"
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowFullScreen
    ></iframe>
  );
}
