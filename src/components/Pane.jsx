import PropTypes from 'prop-types'

export const Pane = (props) => (
  <div
    className={[
      Pane.styles.outset,
      props.noPadding ? '' : 'p-4',
      props.contentWidth ? 'w-fit' : '',
      props.fullHeight ? 'h-full' : '',
    ].join(' ')}
    children={props.children}
  />
)

Pane.styles = {
  outset: ['border', 'border-solid', 'shadow', 'bg-slate-100'].join(' ')
}

Pane.propTypes = {
  children: PropTypes.node.isRequired,
  noPadding: PropTypes.bool,
  fullHeight: PropTypes.bool,
  contentWidth: PropTypes.bool,
}
