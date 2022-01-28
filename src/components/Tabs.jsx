import { useState } from 'react'
import PropTypes from 'prop-types'
import { Pane } from './Pane'
import { motion } from 'framer-motion'

const ERRORS = {
  UNDEF_SET: `"setActiveTab" must be defined when "active" is defined (Tabs is controlled)`,
  DEF_INITIAL: `"initialTab" must be undefined when "active" is defined (Tabs is controlled)`,
  LENGTH: "Tabs must have at least one tab",
  DEF_SET: `"setActiveTab" must be undefined when "active" is undefined (Tabs is uncontrolled)`,
  UNDEF_TAB: (t) => `Tab "${t}" is not defined`,
};

const useTabState = (props) => {
  const { children, activeTab, setActiveTab, initialTab } = props
  if (children.length < 1) throw Error(ERRORS.LENGTH);

  // Self state for uncontrolled
  const state = useState(initialTab ?? children[0].id);

  if (activeTab !== undefined) {
    // Controlled
    if (setActiveTab === undefined) throw Error(ERRORS.UNDEF_SET);
    if (initialTab !== undefined) throw Error(ERRORS.DEF_INITIAL);
    return { active: activeTab, setActive: setActiveTab };
  } else {
    // Uncontrolled
    if (setActiveTab !== undefined) throw Error(ERRORS.DEF_SET);
    return { active: state[0], setActive: state[1] };
  }
};

const renderTitle = (props, state) => (tab) => {
  const { active, setActive } = state;
  // Disable because "react/prop-types" wrongly detects this as a component
  // eslint-disable-next-line react/prop-types
  const style = Tabs.styles.outset;
  return (
    <li
      className={[active === tab.id ? style.active : style.inactive, 'transition-all cursor-pointer py-2 px-3'].join(" ")}
      onClick={() => setActive(tab.id)}
      key={tab.id}
      children={tab.title}
    />
  );
};

export const Tabs = (props) => {
  const { children } = props
  const style = Tabs.styles.outset
  const state = useTabState(props)

  const activeTab = children.find((tab) => tab.id === state.active);
  if (activeTab === undefined) throw Error(ERRORS.UNDEF_TAB(state.active));

  return (
    <div>
      <div className={style.title}>
        {children.map(renderTitle(props, state))}
      </div>
      <div className={style.content}>
        {style.renderContent(activeTab.pane(), props)}
      </div>
    </div>
  );
};

const outsetStyle = {
  content: '-mt-2px border-t-2 border-solid',
  title: ['flex-[0_0_auto]', 'px-16', 'relative', 'flex', 'z-2'].join(' '),
  active: ['border-b-2', 'border-solid', 'border-blue-500'].join(' '),
  inactive: ['border-b-2', 'border-solid', 'border-transparent'].join(' '),
  renderContent: (children, props) => (
    <Pane
      // eslint-disable-next-line react/prop-types
      noPadding={props.noPadding}
      // eslint-disable-next-line react/prop-types
      fullHeight={props.fullHeight}
      children={children}
    />
  ),
};


Tabs.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      pane: PropTypes.elementType
    })
  ).isRequired,
  noPadding: PropTypes.bool,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
  fullHeight: PropTypes.bool,
  initialTab: PropTypes.string,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
}

Tabs.styles = {
  outset: outsetStyle,
}
