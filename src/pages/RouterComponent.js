import { Switch, Route } from "react-router-dom";
import HomeContentBlock from "./HomeContentBlock";
import VideosContentBlock from "./VideosContentBlock";
import DownloadsContentBlock from "./DownloadsContentBlock";
import AboutContentBlock from "./AboutContentBlock";
import Error404 from "./Error404";
import EmbeddedVideo from "../components/EmbeddedVideo";
import videos from "../data/videos.json";

const titleToURL = (title) => title.toLowerCase().replace(/ /g, "-");

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
        {videos.map((video) => (
          <Route
            key={video.id}
            path={`/hw-cad-tools/videos/${titleToURL(video.title)}`}
            exact
          >
            <EmbeddedVideo url={`https://www.youtube.com/embed/${video.id}`} />
          </Route>
        ))}

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
