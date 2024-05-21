import { askChatGPT } from '../../api/chatgpt';  // Import the askChatGPT function

export const askChatGPTCommand = async (args: string[]): Promise<string> => {
  const question = args.join(' ');
  const answer = await askChatGPT(question);  // Call the function from the API file
  return answer;
};