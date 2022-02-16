import contents from '@/markdown/use-transform/useTransform.md?raw'
import examples from '@/markdown/use-transform/useTransformExample.md?raw'
import testProps from '@/markdown/use-transform/testProps.md?raw'
import { Note } from '@/components/note/Note'

// NOTE: https://github.com/brillout/vite-plugin-mdx
export const UseTransform = () => {
  return (
    <Note title={'🤜🏼 useTransform'} contents={contents} examples={examples} testProps={testProps} />
  )
}