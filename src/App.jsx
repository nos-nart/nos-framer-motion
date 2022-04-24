import { useRoutes } from 'react-router-dom'
import { UseTransform, Dashboard } from '@/pages'
import AnimatePage from '@/components/AnimatePage'

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/use-transform",
      element: <UseTransform />,
    },
  ]);

  return (
    <AnimatePage>
      {element}
    </AnimatePage>
  )
}

export default App
