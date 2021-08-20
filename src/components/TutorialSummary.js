import React from "react";
import styles from "./TutorialSummary.module.css";

export default function TutorialSummary({ video }) {
  return (
    <div className={styles.videoSummary}>
      <p>{video.summary && video.summary}</p>
      {video.summaryListing && (
        <table>
          <thead>
            <tr>
              <th>{video.summaryListing[0][0]}</th>
              <th>{video.summaryListing[0][1]}</th>
              <th>{video.summaryListing[0][2]}</th>
            </tr>
          </thead>
          <tbody>
            {video.summaryListing.slice(1).map((listing) => (
              <tr key={listing[0]}>
                <td>
                  <code>{listing[0]}</code>
                </td>
                <td>{listing[1]}</td>
                <td>{listing[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
