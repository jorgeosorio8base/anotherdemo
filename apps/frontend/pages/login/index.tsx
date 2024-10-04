
            import {UserLoginComponent} from "./UserLoginComponent";

            export default function UserLoginComponentPresenter() {
              return <UserLoginComponent />;
            }

            UserLoginComponentPresenter.layout = "AppLayout";
            UserLoginComponentPresenter.auth = false;
          