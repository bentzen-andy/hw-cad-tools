import { Switch, Route } from "react-router-dom";
import HomeContentBlock from "./HomeContentBlock";
import TutorialContentBlock from "./TutorialContentBlock";
import DownloadsContentBlock from "./DownloadsContentBlock";
import DocumentationContentBlock from "./DocumentationContentBlock";
import Error404 from "./Error404";
import EmbeddedVideo from "../components/EmbeddedVideo";
import videos from "../data/videos.json";
import downloads from "../data/lisp-scripts.json";
import SideNav from "../components/SideNav";
import Gist from "../components/Gist";
import styles from "./RouterComponent.module.css";
import { Link } from "react-router-dom";

const titleToURL = (title) => title.toLowerCase().replace(/ /g, "-");

const loadingInstructions = (video) => {
  if (!video.shortcut) return null;
  return (
    <div className={styles.loadingInstructions}>
      {video.summary && video.summary}
      <h3>Loading Instructions</h3>
      <p>
        If you'd like to use this command, add the following code to your{" "}
        <code>_hwloadall.lsp</code> file (excluding the <code>...</code>):
      </p>
      <div className={styles.codeSnippet}>
        <div>
          <code>;; HW Commands</code>
        </div>
        <div>
          <code>...</code>
        </div>
        <div>
          <code>(load C:/kenf/lisp/{video.shortcut[0]}.lsp)</code>
        </div>
        <div>
          <code>...</code>
        </div>
      </div>
      <p>
        Or see the{" "}
        <Link to="/hw-cad-tools/tutorials/hw-load-all">instructions</Link> for
        setting up your <code>_hwloadall.lsp</code> file.
      </p>
    </div>
  );
};

const shortcutInstructions = (video) => {
  if (video.shortcut[1] === "") return null;
  return (
    <div className={styles.commandShortcut}>
      <h3>Command Shortcut:</h3>
      <p>
        If you'd like to set a shortcut for for command, add the following code
        to your <code>_hwloadall.lsp</code> file (following the load statement):
      </p>
      <div className={styles.codeSnippet}>
        <div>
          <code>...</code>
        </div>
        <div>
          <div>
            <code>(load C:/kenf/lisp/{video.shortcut[0]}.lsp)</code>
          </div>
          <code>
            (defun c:{video.shortcut[1]}( / ) c:{video.shortcut[0]})
          </code>
        </div>
        <div>
          <code>...</code>
        </div>
      </div>
      <p>
        OR: You can customize your keyboard shortcut but substituting{" "}
        <code>xyz</code> in place of the <code>{video.shortcut[1]}</code>, where{" "}
        <code>xyz</code> is your shortcut name.
      </p>
      <div className={styles.codeSnippet}>
        <div>
          <code>...</code>
        </div>
        <div>
          <code>(defun c:xyz( / ) c:{video.shortcut[0]})</code>
        </div>
        <div>
          <code>...</code>
        </div>
      </div>
    </div>
  );
};

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
        {loadingInstructions(video)}
        {shortcutInstructions(video)}
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
