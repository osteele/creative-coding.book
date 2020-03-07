import * as React from "react";

const Embed = ({ src }) => {
  if (src.startsWith('https://repl.it/') && !src.endsWith('?lite=true')) {
    src += '?lite=true';
  }
  return (
    <iframe height="400px" width="100%" src={src} scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
  );
};

export default Embed;
