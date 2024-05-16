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

// export const sudo = async (args?: string[]): Promise<string> => {
//   setTimeout(function () {
//     window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
//   }, 1000);

//   return `Permission denied: unable to run the command '${args[0]}' as root.`;
// };

// export const repo = async (_args?: string[]): Promise<string> => {
//   setTimeout(function () {
//     window.open('https://github.com/m4tt72/terminal', '_blank');
//   }, 1000);

//   return 'Opening repository...';
// };

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
