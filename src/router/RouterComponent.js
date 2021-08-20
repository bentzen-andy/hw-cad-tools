import { Switch, Route } from "react-router-dom";
import HomeContentBlock from "../pages/HomeContentBlock";
import TutorialContentBlock from "../pages/TutorialContentBlock";
import DownloadsContentBlock from "../pages/DownloadsContentBlock";
import DocumentationContentBlock from "../pages/DocumentationContentBlock";
import Error404 from "../pages/Error404";
import EmbeddedVideo from "../components/EmbeddedVideo";
import videos from "../data/videos.json";
import downloads from "../data/lisp-scripts.json";
import SideNav from "../components/SideNav";
import Gist from "../components/Gist";
import TutorialSummary from "../components/TutorialSummary";
import LoadingInstructions from "../components/LoadingInstructions";
import ShortcutInstructions from "../components/ShortcutInstructions";

const titleToURL = (title) => title.toLowerCase().replace(/ /g, "-");

const tutorialRoutesList = videos.map((video) => (
  <Route
    key={video.id}
    path={`/hw-cad-tools/tutorials/${titleToURL(video.title)}`}
    exact
  >
    <div className="row">
      <div className="column">
        <SideNav sideNavTitle="Tutorials" links={videos} />
      </div>
      <div className="column">
        <EmbeddedVideo
          url={`https://www.youtube.com/embed/${video.id}`}
          width="840"
          height="470"
          showTitle={true}
        />
        <TutorialSummary video={video} />
        <LoadingInstructions video={video} />
        <ShortcutInstructions video={video} />
      </div>
    </div>
  </Route>
));

const downloadsRoutesList = downloads.map((download) => (
  <Route
    key={download.id}
    path={`/hw-cad-tools/downloads/${titleToURL(download.title)}`}
    exact
  >
    <div className="row">
      <div className="column">
        <SideNav sideNavTitle="Downloads" links={downloads} />
      </div>
      <div className="column">
        <div className="row">
          <a href={download.zipDownload}>
            <button>Download Code</button>
          </a>
        </div>
        <section className="gist">
          <Gist id={download.id} iframeHeight="500" />
        </section>
      </div>
    </div>
  </Route>
));

export default function RouterComponent() {
  return (
    <>
      <Switch>
        <Route path="/hw-cad-tools/" exact>
          <HomeContentBlock />
        </Route>
        <Route path="/hw-cad-tools/tutorials" exact>
          <TutorialContentBlock />
        </Route>
        {tutorialRoutesList}
        {downloadsRoutesList}
        <Route path="/hw-cad-tools/downloads" exact>
          <DownloadsContentBlock />
        </Route>
        <Route path="/hw-cad-tools/docs" exact>
          <DocumentationContentBlock />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}
