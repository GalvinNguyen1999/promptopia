import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"
import User from "@models/user"

export const GET = async (request, { params }) => {
  try {
    await connectToDB()
    const prompts = await Prompt.find({
      creator: params.id
    }).populate('creator')
    return new Response(JSON.stringify(prompts), {
      status: 200
    })
  } catch (error) {
    return new Response("Failed to feach all prompts", {
      status: 500
    })
  }
}
