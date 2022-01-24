import PropTypes from 'prop-types'
import { NoteContent } from './NoteContent'
import { NotePlayground } from './NotePlayground'

export const Note = (props) => {
  return (
    <div className="flex items-start min-h-screen w-full">
      <NoteContent title={props.title} contents={props.contents} />
      <NotePlayground />
    </div>
  )
}

Note.propTypes = {
  contents: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
