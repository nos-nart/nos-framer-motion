import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { VscArrowUp } from 'react-icons/vsc'
import { Markdown } from '../Markdown'

const THRESH_HOLD = 600

export const NoteContent = (props) => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const wrapperRef = useRef()

  const onScroll = () => {
    if (wrapperRef) {
      if (wrapperRef.current.scrollTop >= THRESH_HOLD && !showScrollTop) {
        setShowScrollTop(true)
      }
      else if (wrapperRef.current.scrollTop < THRESH_HOLD && showScrollTop) {
        setShowScrollTop(false)
      }
    }
  }

  return (
    <div
      className='w-1/2 scroll-smooth relative p-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 h-screen overflow-y-scroll'
      ref={wrapperRef}
      onScroll={onScroll}
    >
      <motion.div
        className='fixed bottom-4 right-3 z-50 flex flex-col items-center cursor-pointer'
        key="scroll-to-top"
        onClick={() => wrapperRef.current.scrollTop = 0}
        animate={{ 
          y: showScrollTop ? 0 : -30, 
          opacity: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.2 }}
      >
        <VscArrowUp size={25} className='fill-blue-500' />
        <span style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }} className='text-xs font-bold text-blue-500'>To top</span>
      </motion.div>
      <div className='rounded p-4 bg-slate-100 max-w-2xl mx-auto'>
        <Markdown markdown={props.contents} />
      </div>
    </div>
  )
}

NoteContent.propTypes = {
  contents: PropTypes.string.isRequired
}
