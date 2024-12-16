export type Attachment = {
  type: "attachment" | any;
  content: Buffer;
  contentType: string;
  release: any;
  contentDisposition: string;
  filename: string;
  headers: Map<string, string>;
  checksum: string;
  size: number;
};

export type SMTPEmail = {
  attachments: Attachment[];
  headers: Map<
    string,
    {
      value: any[];
      html: string;
      text: string;
    }
  >;
  html: string;
  text: string;
  textAsHtml: string;
  subject: string;
  date: Date;
  to: {
    value: {
      address: string;
      name?: string;
    }[];
    html: string;
    text: string;
  };
  from: {
    value: {
      address: string;
      name: string;
    }[];
    html: string;
    text: string;
  };
  messageId: string;
  dkim: string;
  spf: string;
  spamScore: number;
  language: string;
  cc: any[];
  connection: SMTPConnection;
  envelopeFrom: { address: string; args: boolean };
  envelopeTo: { address: string; args: boolean }[];
};

export type SMTPConnection = {
  id: string;
  secure: boolean;
  localAddress: string;
  localPort: number;
  remoteAddress: string;
  remotePort: number;
  clientHostname: string;
  openingCommand: string;
  hostNameAppearsAs: string;
  xClient: Map<any, any>;
  xForward: Map<any, any>;
  transmissionType: string;
  tlsOptions: {
    name: string;
    standardName: string;
    version: string;
  };
  envelope: {
    mailFrom: { address: string; args: boolean };
    rcptTo: { address: string; args: boolean }[];
  };
  transaction: number;
  servername: string;
  mailPath: string;
};

export type SMTPContent = Buffer;
