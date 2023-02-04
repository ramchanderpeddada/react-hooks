// import { useRef } from "react";

// export default function Hook2() {
//   let ref = useRef(0);

//   const handleClick = () => {
//     ref.current = ref.current + 1;
//     alert("u clicked" + ref.current + " times!");
//   };

//   return (
//     <>
//       <button onClick={handleClick}>click</button>
//     </>
//   );
// }

import { useState, useRef, useEffect } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={ref}
      src={src}
      loop
      playsInline
      height={"200px"}
      width={"200px"}
    />
  );
}

export default function Hook2() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
