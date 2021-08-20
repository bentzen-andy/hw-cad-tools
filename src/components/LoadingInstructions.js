import React from "react";
import styles from "./LoadingInstructions.module.css";
import { Link } from "react-router-dom";

export default function LoadingInstructions({ video }) {
  if (video.lspFileNames[0] === "") return null;
  return (
    <div className={styles.loadingInstructions}>
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
        {video.lspFileNames.map((fileName) => (
          <div key={fileName}>
            <code>(load C:/kenf/lisp/{fileName})</code>
          </div>
        ))}

        <div>
          <code>...</code>
        </div>
      </div>
      <p>
        Or see the{" "}
        <Link to="/hw-cad-tools/tutorials/setting-up-your-_hwloadall-file">
          instructions
        </Link>{" "}
        for setting up your <code>_hwloadall.lsp</code> file.
      </p>
    </div>
  );
}
