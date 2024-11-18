'use client';

import rehypePrism from 'rehype-prism-plus';
import React, { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Editor() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      rehypePlugins={[
        [rehypePrism, { ignoreMissing: true, showLineNumbers: true }]
      ]}
      style={{
        backgroundColor: '#f5f5f5',
        fontFamily:
          'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
      }}
    />
  );
}
