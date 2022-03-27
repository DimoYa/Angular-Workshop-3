import IBase from './Base';
import IUser from './User';

interface ITheme<T = string> extends IBase {
  subscribers: string[];
  posts: T[];
  themeName: 'Angular 10';
  userId: IUser | null;
  postText: string;
}

export default ITheme;
