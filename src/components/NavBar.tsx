import { NavLink } from 'react-router-dom'

function NavBar() {
    const linkClasses = ({isActive}: {isActive: boolean}) => 
        `px-3 py-2 rounded transition-colors ${
            isActive 
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
        }`;
    return (
        <nav className="flex items-center gap-2 p-4 border-b">
            <ul>
                <li>
                    <NavLink to='/' className={linkClasses}>Home</NavLink>
                </li>
                <li>
                    <NavLink to ='/list/want' className={linkClasses}>Want</NavLink>
                </li>
                 <li>
                    <NavLink to ='/list/active' className={linkClasses}>Active</NavLink>
                </li>
                 <li>
                    <NavLink to ='/list/done' className={linkClasses}>Done</NavLink>
                </li>
                <li>
                    <NavLink to ='/list/dropped' className={linkClasses}>Dropped</NavLink>
                </li>
                  <li>
                    <NavLink to ='/about' className={linkClasses}>About</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;