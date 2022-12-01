import { NextApiRequest, NextApiResponse} from 'next'
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

// const basePromptPrefix = "Write a list of short landing page headlines in the style of success for a startup. Write the copy to appeal to buyers. Don't include confusing terms like AI in it. The startup builds the following:";
const basePromptPrefix = "Write a pitch description for a github repository within 100 characters for the following project:";

const generateAction = async (request: NextApiRequest, response: NextApiResponse) => {
    console.log(`API {basePromptPrefix}${request.body.userInput}`)

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix} ${request.body.userInput}.\n`,
        temperature: 0.8,
        max_tokens: 250,
    })

    const basePromptOutput = baseCompletion.data.choices.pop();
    response.status(200).json({output: basePromptOutput})
}

export default generateAction;