import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export const askChatGPT = async (question: string): Promise<string> => {
    const apiKey = process.env.OPENAI_API_KEY;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
              prompt: question,
              max_tokens: 150,
            },
            {
              headers: {
                'Authorization': `Bearer ${apiKey}`,
              },
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error querying CGPT:', error);
        return 'Sorry, something broke or went away for a bit. Try again later.'
    }
}