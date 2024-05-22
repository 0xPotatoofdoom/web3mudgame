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

export const date = async (_args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (_args: string[]): Promise<string> => {
  window.open('https://web3mud.game', '_self');

  return 'Opening GUI version...';
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

export const login = async (_args?: string[]): Promise<string> => {
  const token = localStorage.getItem('token');
  if (token) {
    return 'You already logged in!';
  } else {
    const email = _args[0];
    if (!email) {
      return 'Login cancelled: email is required.';
    }

    const password = _args[1];
    if (!password) {
      return 'Login cancelled: password is required.';
    }

    try {
      const response = await fetch('http://localhost:443/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      return `Login successful. Your token is: ${data.token}`;
    } catch (error) {
      return error.message;
    }
  }
};

export const logout = async (_args?: string[]): Promise<string> => {
  localStorage.removeItem('token');
  return 'You logged out!';
};

export const register = async (_args?: string[]): Promise<string> => {
  const email = _args[0];
  if (!email) {
    return 'Register cancelled: email is required.';
  }

  const password = _args[1];
  if (!password) {
    return 'Register cancelled: password is required.';
  }

  try {
    const response = await fetch('http://localhost:443/api/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Register failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    return `Registration error: ${error.message}`;
  }
};
