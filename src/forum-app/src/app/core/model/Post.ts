import IBase from './Base';
import ITheme from './Theme';
import IUser from './User';

interface IPost extends IBase {
  likes: string[];
  text: string;
  userId: IUser;
  themeId: ITheme;
}

export default IPost;
