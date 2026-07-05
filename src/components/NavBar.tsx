import { NavLink } from 'react-router-dom';

import DensitySelector from './DensitySelector';
import ThemeToggle from './ThemeToggle';

import { useUiStore } from '../store/useUiStore';

function NavBar() {
    const theme = useUiStore((state) => state.theme);
    const linkClasses = ({isActive}: {isActive: boolean}) => 
        `px-3 py-2 rounded transition-colors ${
            isActive 
                ? "bg-blue-600 text-white"
                : theme === "dark"
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-200"
        }`;
    return (
        <nav className="flex flex-wrap justify-between items-center gap-4 p-4 border-b">
            <ul className="flex flex-wrap items-center gap-2">
                <li><NavLink to='/' end className={linkClasses}>Home</NavLink></li>
                <li><NavLink to='/list/want' className={linkClasses}>Want</NavLink></li>
                <li><NavLink to='/list/active' className={linkClasses}>Active</NavLink></li>
                <li><NavLink to='/list/done' className={linkClasses}>Done</NavLink></li>
                <li><NavLink to='/list/dropped' className={linkClasses}>Dropped</NavLink></li>
                <li><NavLink to='/about' className={linkClasses}>About</NavLink></li>
            </ul>
            <div className="flex items-center gap-2">
                <DensitySelector />
                <ThemeToggle />
            </div>
        </nav>
    );
}
export default NavBar;