import ImageCaptions from "./experiments/HuggingFaceInterence/HuggingFaceInference.js";

import ServerTransformer from "./experiments/serverTranformer.js";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <ServerTransformer />
      <h2 style={{ margin: 20 }}>HuggingFace inference</h2>
      <ImageCaptions />
    </div>
  );
}
