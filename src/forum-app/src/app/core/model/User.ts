import IBase from './Base';

interface IUser extends IBase {
  themes: string[];
  posts: string[];
  tel: string;
  email: string;
  username: string;
  password: string;
}

export default IUser;
