import App from './app';
import AuthRoute from './module/auth/auth.route';
import ProfileRoute from './module/Profile/profile.route';
import FileManagementRoute from './module/file-management/file-management.route';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([new AuthRoute(),new ProfileRoute(), new FileManagementRoute()]);

//Listen
app.listen();

