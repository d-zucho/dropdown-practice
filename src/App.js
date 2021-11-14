import './App.css'
import NavBar from './components/NavBar'
import NavItem from './components/NavItem'
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg'

function App() {
  return (
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <p>Hello World</p>
      </NavItem>
    </NavBar>
  )
}

// const NavBar = (props) => {
//   return (
//     <nav className='navbar'>
//       <ul className='navbar-nav'>{props.children}</ul>
//     </nav>
//   )
// }

export default App
