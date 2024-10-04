
            import {HomeComponent} from "./HomeComponent";

            export default function HomeComponentPresenter() {
              return <HomeComponent />;
            }

            HomeComponentPresenter.layout = "AppLayout";
            HomeComponentPresenter.auth = false;
          