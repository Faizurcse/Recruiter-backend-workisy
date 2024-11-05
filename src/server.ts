import App from './app';
import AuthRoute from './module/auth/auth.route';
import ProfileRoute from './module/Profile/profile.route';
import FileManagementRoute from './module/file-management/file-management.route';
import jobposteRoute from "./module/jobPost/jobPost.route"
import validateEnv from './utils/validateEnv';


validateEnv();

const app = new App([new AuthRoute(),new ProfileRoute(),new jobposteRoute(), new FileManagementRoute()]);

//Listen
app.listen();

