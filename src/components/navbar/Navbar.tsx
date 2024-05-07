export default function Navbar() {
    return (
        <nav className="bg-black border-2 border-primary text-white flex items-center justify-between p-4">
            <h1 className="text-2xl text-secondary">QA</h1>
            <ul className="flex space-x-4 items-center">
                <li><a href="/">Map Search</a></li>
                <li><a href="#">Market Trends</a></li>
                <li><a href="#">Home Valuation</a></li>
                <button className="bg-black border-2 border-primary text-white px-4 py-2 rounded">Login In</button>
                <button className="bg-secondary border-2 border-secondary text-black px-4 py-2 rounded">Join</button>
            </ul>
        </nav>
    )
}
