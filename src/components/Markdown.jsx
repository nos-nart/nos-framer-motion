import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import PropTypes from 'prop-types'

export const Markdown = ({ markdown }) => {
  return (
    <>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={vscDarkPlus}
                // wrapLines={true}
                showLineNumbers={true}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </>
  )
}

Markdown.propTypes = {
  markdown: PropTypes.any.isRequired
}
