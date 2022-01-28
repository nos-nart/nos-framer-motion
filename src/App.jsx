import { useRoutes } from 'react-router-dom'
import { UseTransform, Dashboard, Test } from '@/pages'
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
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return (
    <AnimatePage>
      {element}
    </AnimatePage>
  )
}

export default App
