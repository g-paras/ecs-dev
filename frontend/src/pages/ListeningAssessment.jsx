import { useState } from "react";

const ListeningAssessment = () => {
  // audio cdn links: hosted on private cloudinary server
  const audios = [
    "https://res.cloudinary.com/kiethub/video/upload/v1662418065/audio/sevmdn.aac",
    "https://res.cloudinary.com/kiethub/video/upload/v1662418054/audio/mn5j14.aac",
    "https://res.cloudinary.com/kiethub/video/upload/v1662417870/audio/ccv62u.aac",
  ];
  const [audio] = useState(new Audio(audios[2]));

  return <button onClick={() => audio.play()}>Play</button>;
};

export default ListeningAssessment;
