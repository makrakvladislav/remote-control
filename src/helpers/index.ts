export interface ICommand {
  command: string;
  x: string;
  y: string;
}

const commandParser = (command: string) => {
  const commandVals = command.split(' ');

  return {
    command: commandVals[0],
    x: commandVals[1],
    y: commandVals[2],
  };
};

export { commandParser };
