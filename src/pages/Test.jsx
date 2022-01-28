import { useState } from 'react'
import { Tabs } from "@/components/Tabs"

export const Test = () => {
  const [tab, setTab] = useState("first");
  const FirstPane = () => (
    <button onClick={() => setTab("second")}>Next</button>
  );
  const SecondPane = () => (
    <button onClick={() => setTab("first")}>Back</button>
  );

  return (
    <>
      <Tabs setActiveTab={setTab} activeTab={tab}>
        {[
          { id: "first", title: "First", pane: FirstPane },
          { id: "second", title: "Second", pane: SecondPane },
        ]}
      </Tabs>
    </>
  )
}