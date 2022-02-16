import PropTypes from 'prop-types'
import { NoteContent } from './NoteContent'
import { NotePlayground } from './NotePlayground'

export const Note = (props) => {
  const { contents, title, ...rest } = props
  return (
    <div className="flex items-start min-h-screen w-full">
      <NoteContent title={title} contents={contents} />
      <NotePlayground completedCode={rest} />
    </div>
  )
}

Note.propTypes = {
  contents: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
