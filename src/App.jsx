import React, { useState, useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Post from './post.mdx';
import { COMPONENTS } from './helpers/markdown.helper';
import * as runtime from "react/jsx-runtime";
import { compile } from "@mdx-js/mdx";
import { promises as fs } from 'node:fs';

// function useMDX(content) {
//   const [exports, setExports] = useState({ default: runtime.Fragment });

//   useEffect(() => {
//     compile(mdxContent, { ...runtime }).then((exports) => setExports(exports));
//   }, [content]);

//   return exports;
// }

const mdxCompileOptions = () => {
  return {
    remarkPlugins: [],
    rehypePlugins: []
  }
}

async function useMDX(content) {

}

function App() {
  // const exports = useMDX(mdxContent);
  // const Content = exports.default;
  const compiled = compile(await fs.readFile('post.mdx'));
  console.log(String(compiled))

  return (
    <div className="App">
      <Content />
    </div>
  )
}

export default App
