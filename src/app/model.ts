export class Model {
  name: string;
  status: string;
  about: string;
  messages: Message[];

  rows: number;
  cols: number;
}

export class Message {
  who: string;
  message: string;
}