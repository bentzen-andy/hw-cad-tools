import React from "react";

export default function Fetch({ uri }) {
  fetch(uri)
    .then((res) => res.json())
    .then(console.log);

  return <div className="fetch-component"></div>;
}
