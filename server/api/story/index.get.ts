import { StoryModel } from "~~/models/story.db";

export default defineEventHandler(async (e) => {
  try {
    const stories = await StoryModel.find().sort({ $natural: -1 }).limit(4);

    return (
      [...stories].map((story) => {
        return {
          ...story.toJSON(),
          id: story._id,
        };
      }) || []
    );
  } catch (error) {
    return error;
  }
});
