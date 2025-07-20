import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <div>
            <div className="w-full bg-amber-50 p-8">
                <div className="flex gap-15 items-center">
                    <NavLink to="/" className="text-2xl">
                        <span className="text-indigo-500">
                            REST<span className="text-amber-500"> Explorer </span>
                        </span>
                    </NavLink>
                    <nav className="text-gray-900 flex gap-4 text-xl">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/countries">Countries</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}
