import { Markdown } from "@/components/Markdown"
import markdown from '@/markdown/usetransform.md?raw'

// @NOTE: https://github.com/brillout/vite-plugin-mdx
export const UseTransform = () => {
  return (
    <>
      <p onClick={() => console.log('hello world')}>hello world</p>
      useTransform
      <Markdown markdown={markdown} />
    </>
  )
}