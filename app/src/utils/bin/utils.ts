import * as bin from './index';

export const help = async (_args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (_args: string[]): Promise<string> => {
  return 'guest';
};

export const bank = async (_args: string[]): Promise<string> => {
  return 'Under Construction';
};

export const date = async (_args: string[]): Promise<string> => {
  return new Date().toString();
};

export const infrastructure = async (_args: string[]): Promise<string> => {
  window.open('https://opsec.computer', '_self');

  return 'Accessing decentralized I/O';
};

export const opsecInfo = async (_args: string[]): Promise<string> => {
  const message = "opsec.computer provides decentralized infrastructure as a service. We empower the next generation of web3 builders with DePIN and AI, enabling secure, scalable, and innovative solutions.";
  return message;
};

export const opsecNode = async (_args: string[]): Promise<string> => {
  const message = "Start an Opsec powered Node for your desired chain.";
  return message;
};

export const email = async (_args: string[]): Promise<string> => {
  window.open('mailto:hi@web3mud.game');

  return 'Opening mailto:hi@web3mud.game...';
};

export const vi = async (_args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (_args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (_args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const banner = (_args?: string[]): string => {
  return `
  ██╗    ██╗███████╗██████╗ ██████╗ ███╗   ███╗██╗   ██╗██████╗     ██████╗  █████╗ ███╗   ███╗███████╗
  ██║    ██║██╔════╝██╔══██╗╚════██╗████╗ ████║██║   ██║██╔══██╗   ██╔════╝ ██╔══██╗████╗ ████║██╔════╝
  ██║ █╗ ██║█████╗  ██████╔╝ █████╔╝██╔████╔██║██║   ██║██║  ██║   ██║  ███╗███████║██╔████╔██║█████╗  
  ██║███╗██║██╔══╝  ██╔══██╗ ╚═══██╗██║╚██╔╝██║██║   ██║██║  ██║   ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
  ╚███╔███╔╝███████╗██████╔╝██████╔╝██║ ╚═╝ ██║╚██████╔╝██████╔╝██╗╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
   ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝  

Type 'help' to see list of available commands.
`;
};

export const tutorial = async (_args?: string[]): Promise<string> => {
  return `
  Welcome to Web3MUD.Game!
  In this tutorial, you'll learn how to navigate the game, interact with other players, and utilize blockchain features.
  1. Type 'learn' to explore educational modules.
  2. Type 'defi' to learn more about DeFi functionalities.
  3. Type 'roadmap' to learn more about our development roadmap.
  4. Type 'contact' to get in touch with us.
  `;
};

export const learn = async (_args?: string[]): Promise<string> => {
  return `
  Web3MUD.Game offers the following educational modules:
  - JavaScript Programming: Learn the basics to advanced concepts.
  - Blockchain Technology: Understand the principles and applications.
  - Financial Literacy: Get insights into DeFi and financial strategies.

  Usage: learn [module]. Example: learn javascript
  `;
};

export const defi = async (_args?: string[]): Promise<string> => {
  return `
  Web3MUD.Game integrates the following DeFi features:
  - Token swaps: Trade tokens within the game.
  - Staking: Earn rewards by staking your tokens.
  - Smart Contracts: Create and manage smart contracts and assets.
  - Perps Trading: Trade tokens with leverage.
  - Advanced Financial Strategies: Use DCA or grid bot strategies to trade.
  `;
};

export const roadmap = async (_args?: string[]): Promise<string> => {
  return `
  Web3MUD.Game Development Roadmap:
  - Q2-Q3 2024: Alpha Development Phase
  - Q4 2024: Beta Development and Testing Phase
  - Q1 2025: Public Launch Preperation
  - Q2 2025: Public Launch!

  Stay tuned for updates and new features by typing 'subscribe' after registering.
  `;
};