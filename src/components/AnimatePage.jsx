import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const variants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
  }
}

const AnimatePage = (props) => {
  const [display, setDisplay] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setDisplay(true)
  }, [location])

  return (
    <AnimatePresence>
      {
        display && (
          <motion.div
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="bg-gray-800 h-screen w-screen absolute top-0 left-0 z-50"
            onAnimationComplete={() => setDisplay(false)}
          />
        )
      }
      {props.children}
    </AnimatePresence>
  )
}

AnimatePage.propTypes = {
  children: PropTypes.node
}

export default AnimatePage