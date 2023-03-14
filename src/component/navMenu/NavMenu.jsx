import { Link } from 'react-router-dom';
import "./menu.css"

export default function NavMenu() {
  return (
    <div className='icons2'>
    <ul>
      <Link className='links2' title='Home' to="/"><li>Home</li></Link>
      <Link className='links2' title='Friends'><li>Friends</li></Link>
      <Link className='links2' title='Market Place'><li>Store</li></Link>
      <Link className='links2' title='Game zone'><li>Photos</li></Link>
      <Link className='links2' title='Group'><li>Groups</li></Link>
    </ul>
  </div>
  )
}
