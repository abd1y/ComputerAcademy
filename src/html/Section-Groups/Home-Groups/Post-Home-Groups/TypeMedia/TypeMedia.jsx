import React from "react";
import Img from "./Img";
import VideoMidea from "./Video";
import Pdf from "./Pdf";
import API from "../../../../Axios";
export default function TypeMedia({ media }) {
    if (!media) return null;
  return (
    <div className="TypeMedia">
      {(media.toLowerCase().endsWith(".png") ||
        media.toLowerCase().endsWith(".jpg")) && <Img LinkImage={media} />}
      {(media.toLowerCase().endsWith(".mp4") ||
        media.toLowerCase().endsWith(".mov")) && <VideoMidea LinkVideo={media} />}
      {media.toLowerCase().endsWith(".pdf") && <Pdf LinkVideo={media} />}
    </div>
  );
}
