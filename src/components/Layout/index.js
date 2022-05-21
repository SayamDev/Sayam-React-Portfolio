import './index.css'
import { Sidebar } from '../Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
      <span className='tags top-tags'>&alt;body&gt;</span>

      <Outlet />

      <span className='tags bottom-tags'>
      &alt;body&gt;
      <br />
      <span className='bottom-tag-html'>&alt;html&gt;</span>
      </span>

      </div>
    </div>
  )
}