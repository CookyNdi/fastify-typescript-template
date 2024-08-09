import { sayHiService } from '../service/say-hi.service';

export const sayHi = (name: string) => {
  return sayHiService(name);
};
