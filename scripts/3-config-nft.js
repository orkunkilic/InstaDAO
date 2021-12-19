import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x8703Ee97eF63DFbfdB3d94CDb6C355e6a8206044",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "InstaDAO NFT",
        description: "This NFT will give you access to InstaDAO!",
        image: readFileSync("scripts/assets/eth.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()