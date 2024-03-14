"use client";
import { useState } from "react";

import { createImageCaption } from "@/app/actions";
const ImageCaptions = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [caption, setCaption] = useState(null);

  // Handles file selection and updates the state
  const handleChange = (e) => {
    setImageUrl(e.target.value);
  };
  const getCaption = async () => {
    if (!imageUrl) return;

    const result = await createImageCaption(imageUrl);
    setCaption(result);
  };
  console.log({ imageUrl });

  return (
    <div>
      <h3>Image Caption</h3>
      <h4>Paste this for image url to the input</h4>
      <p>
        https://www.port.ac.uk/sites/default/files/styles/event_blog_news_desktop/public/media/images/donkey%20600%20x%20400.webp?itok=brn_22YD
      </p>
      <input type="text" onChange={handleChange} />
      <button onClick={getCaption}>Get Caption</button>

      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Preview"
            style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
            width="200"
            height="200"
          />
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
};
export default ImageCaptions;
