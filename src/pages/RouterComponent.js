import { Switch, Route } from "react-router-dom";
import HomeContentBlock from "./HomeContentBlock";
import VideosContentBlock from "./VideosContentBlock";
import DownloadsContentBlock from "./DownloadsContentBlock";
import AboutContentBlock from "./AboutContentBlock";
import Error404 from "./Error404";
import VideoLandingPage from "../components/VideoLandingPage";

export default function RouterComponent() {
  return (
    <>
      <Switch>
        <Route path="/hw-cad-tools/" exact>
          <HomeContentBlock />
        </Route>
        <Route path="/hw-cad-tools/videos" exact>
          <VideosContentBlock />
        </Route>

        <Route path="/hw-cad-tools/videos/hw-combine-mesh" exact>
          <VideoLandingPage url="https://www.youtube.com/embed/NATsPEB2w1I" />
        </Route>
        <Route path="/hw-cad-tools/videos/hw-cut-mesh" exact>
          <VideoLandingPage url="" />
        </Route>
        <Route path="/hw-cad-tools/videos/hw-zap-mesh" exact>
          <VideoLandingPage url="" />
        </Route>
        <Route path="/hw-cad-tools/videos/hw-bridge-mesh" exact>
          <VideoLandingPage url="" />
        </Route>

        <Route path="/hw-cad-tools/downloads" exact>
          <DownloadsContentBlock />
        </Route>
        <Route path="/hw-cad-tools/about" exact>
          <AboutContentBlock />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}
