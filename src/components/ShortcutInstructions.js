import React from "react";
import styles from "./ShortcutInstructions.module.css";

export default function ShortcutInstructions({ video }) {
  if (video.shortcut === "") return null;
  return (
    <div className={styles.commandShortcut}>
      <h3>Command Shortcut:</h3>
      <p>
        If you'd like to set a shortcut for this command, add the following code
        to your <code>_hwloadall.lsp</code> file (following the load statement):
      </p>
      <div className={styles.codeSnippet}>
        <div>
          <code>...</code>
        </div>
        <div>
          {video.lspFileNames.map((fileName) => (
            <div key={fileName}>
              <code>(load C:/kenf/lisp/{fileName})</code>
            </div>
          ))}{" "}
          <code>
            (defun c:{video.shortcut}( / ) c:{video.commandName})
          </code>
        </div>
        <div>
          <code>...</code>
        </div>
      </div>
      <p>
        OR: You can customize your keyboard shortcut but substituting{" "}
        <code>xyz</code> in place of the <code>{video.shortcut}</code>, where{" "}
        <code>xyz</code> is your shortcut name.
      </p>
      <div className={styles.codeSnippet}>
        <div>
          <code>...</code>
        </div>
        <div>
          <code>(defun c:xyz( / ) c:{video.commandName})</code>
        </div>
        <div>
          <code>...</code>
        </div>
      </div>
    </div>
  );
}
