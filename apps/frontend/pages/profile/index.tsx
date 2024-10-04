
            import {UserProfileComponent} from "./UserProfileComponent";

            export default function UserProfileComponentPresenter() {
              return <UserProfileComponent />;
            }

            UserProfileComponentPresenter.layout = "AppLayout";
            UserProfileComponentPresenter.auth = false;
          