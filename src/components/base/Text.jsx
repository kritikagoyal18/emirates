import React from "react";
import {getURI} from "../../utils";

const Text = ({ children, content, className, prop, label, behavior }) => {
  const editorProps = {
    "data-aue-prop": prop,
    "data-aue-label": label || (prop && prop[0].toUpperCase() + prop.slice(1)),
  };

  // Function to fix image paths
  function fixImagePaths(html, baseUrl) {
    // Replace all occurrences of src="/path" with src="http://baseurl/path"
    return html.replace(/src="\/(.*?)"/g, (match, path) => {
      return `src="${baseUrl}/${path}"`;
    });
  }

  let Component = null;
  if(!children && typeof content === "string") {
    Component = (
        <div {...editorProps} data-aue-type="text" className={className}>
          {content}
        </div>
    );
  }

  if (children || content?.plaintext) {
    Component = (
      <div {...editorProps} data-aue-type="text" className={className}>
        {children || content.plaintext}
      </div>
    );
  } else if (content?.html) {
    Component = (
      <div
        {...editorProps}
        data-aue-type="richtext"
        className={className}
        dangerouslySetInnerHTML={{ __html: fixImagePaths(content.html, getURI(""))}}
      />
    );
  }
  return Component;
};

export default Text;
