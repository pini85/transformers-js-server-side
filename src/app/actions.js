"use server";
import { HfInference } from "@huggingface/inference";
export const createImageCaption = async (imageUrl) => {
  const HF_ACCESS_TOKEN = process.env.API_KEY;
  console.log({ HF_ACCESS_TOKEN });
  const interence = new HfInference(HF_ACCESS_TOKEN);
  const model = "Salesforce/blip-image-captioning-large";
  const response = await fetch(imageUrl);
  const imageBlob = await response.blob();

  const result = await interence.imageToText({
    model,
    data: imageBlob,
  });
  console.log({ result });
  return result.generated_text;
};
