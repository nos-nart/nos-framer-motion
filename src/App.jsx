import { useRoutes } from 'react-router-dom'
import { UseTransform, Dashboard } from '@/pages'

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

  return element;
}

export default App
