import React, { useState, useEffect } from "react";
import {marked} from "marked";
import "./App.css";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(`# Welcome to my Markdown Previewer!
## This is a subheading...
[GitHub](https://github.com)
\`inline code\`

\`\`\`
code block
\`\`\`

- list item
> blockquote
![React Logo](https://th.bing.com/th?id=OIP.Cq0qO_7V9zG8t0KCmpEgAAHaEo&w=316&h=197&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2)
**bold text**`);
  }, []);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        className="textarea"
      />
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownPreviewer;
