import type { Story } from "~~/models/story";
import { StorySchema } from "~~/models/story";
import { StoryModel } from "~~/models/story.db";
import mongoUser from "~/server/dbUser";

const newStory = (title: string, body: Array<string>, createdBy: string) => {
  const family: Story = {
    title,
    createdBy,
    body,
    short: "",
    created: new Date(),
    updatedBy: createdBy,
    updated: new Date(),
  };
  return family;
};

export default defineEventHandler(async (e) => {
  try {
    const dbUser = await mongoUser(e);
    const body = await readBody(e);

    const newStoryObject = newStory(
      body.title,
      body.body,
      dbUser.id.toString() || "Missing token"
    );
    const valid = await StorySchema.safeParse(newStoryObject);
    if (valid.success) {
      const storyDoc = new StoryModel(newStoryObject);
      await storyDoc.save();
      return storyDoc.toJSON();
    } else {
      return valid.error; // or handle the validation error accordingly
    }
  } catch (error) {
    return error;
  }
});
