"use client";
import { Player } from "@lottiefiles/react-lottie-player";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  path: any;
  className?: string;
  size?: string;
};

const ShowLottie = ({ path, className = "", size = "100%" }: Props) => {
  const style = {
    height: size,
    width: size,
  };

  return (
    <div className={`max-w-sm md:max-w-md ${className}`}>
      <Player autoplay loop src={path} style={style}></Player>
    </div>
  );
};

export default ShowLottie;
