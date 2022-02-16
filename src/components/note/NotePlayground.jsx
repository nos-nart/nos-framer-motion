import React, { useState } from 'react'
import { Tabs } from "../Tabs"
import { Markdown } from '../Markdown'

const isEmpty = val => val == null || !(Object.keys(val) || val).length

export const NotePlayground = ({ completedCode }) => {
  console.log(completedCode)
  console.log(Object.keys(completedCode)[0])
  const [tab, setTab] = useState(Object.keys(completedCode)[0]);

  const FirstPane = () => (
    <button onClick={() => setTab("second")}>Next</button>
  );

  return (
    <div className='w-1/2 fixed top-0 right-0 h-screen'>
      This is code playground
      {(() => {
        if (isEmpty(completedCode)) {
          // TODO: No content component
          return <p>Don't have content!</p>
        }
        return (
          <Tabs setActiveTab={setTab} activeTab={tab}>
            {Object.entries(completedCode).map(i => ({ id: i[0], title: i[0], pane: FirstPane }))}
          </Tabs>
        )
      })()}
    </div>
  )
}
