import markdown from '@/markdown/useTransform.md?raw'
import { Note } from '@/components/note/Note'

// @NOTE: https://github.com/brillout/vite-plugin-mdx
export const UseTransform = () => {
  return (
    <Note title={'🤜🏼 useTransform'} contents={markdown} />
  )
}