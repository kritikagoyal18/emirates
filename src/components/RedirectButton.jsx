import React from "react";

const RedirectButton = ({ children, href = "/", className, propLabel, propLink, label, behavior }) => {
  const editorPropsLabel = {
    "data-aue-prop": propLabel || "buttonLabel",
    "data-aue-type": "text",
    "data-aue-label": label || "Button Label",
  };

  const editorPropsLink = {
    "data-aue-prop": propLink || "buttonLink",
    "data-aue-type": "url",
    "data-aue-label": "Button Link",
    "data-aue-behavior": behavior,
  };

  return (
    <a href={href} {...editorPropsLink}>
      <button className={className} {...editorPropsLabel}>{children}</button>
    </a>
  );
};

export default RedirectButton;
