export class Data {
  encryptionMethod: string;
  ssidName: string;
  password: string;
  isHidden: boolean;

  constructor(
    encryptionMethod: string,
    ssidName: string,
    password: string,
    isHidden: boolean
  ) {
    this.encryptionMethod = encryptionMethod;
    this.ssidName = ssidName;
    this.password = password;
    this.isHidden = isHidden;
  }
}
