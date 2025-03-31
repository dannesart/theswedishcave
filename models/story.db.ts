import { model, Model, Schema } from "mongoose";
import type { Story } from "./story";

const StoryDbSchema: Schema<Story> = new Schema({
  title: String,
  createdBy: String,
  created: { type: Date, default: Date.now },
  updatedBy: String,
  short: String,
  body: [String],
  updated: { type: Date, default: Date.now },
});

const StoryModel: Model<Story> = model("stories", StoryDbSchema);

export { StoryModel };
