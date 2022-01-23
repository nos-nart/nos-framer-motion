import { Link } from 'react-router-dom'
import { FramerIcon } from '@/components/FramerIcon'

export const Dashboard = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 w-screen h-screen flex justify-center'>
      <div className='max-w-4xl w-full mt-20'>
        <div className='flex items-center'>
          <FramerIcon className="w-5 mr-2" /> Framer
        </div>
        <div className='py-6'>
          <Link to="/use-transform">
            <span className="link relative">🤜🏼 Go to useTransform</span>
          </Link>
        </div>
      </div>
    </div>
  )
}