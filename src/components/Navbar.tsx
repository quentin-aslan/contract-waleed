import Dropdown, {DropdownItem} from "./Dropdown.tsx";

export default function Navbar() {

    const toolsOptions: DropdownItem[] = [
        {
            id: "blog",
            label: "Blog",
            url: "/blog"
        },
        {
            id: "recommend-communities",
            label: "Recommend Communities",
            url: "/recommend-communities"
        },
        {
            id: "contact-us",
            label: "Contact Us",
            url: "/contact-us"
        }
    ]

    return (
        <nav className="bg-black border-2 border-primary text-white flex items-center justify-between p-4">
            <h1 className="text-2xl text-secondary">QA</h1>
            <ul className="flex space-x-4 items-center">
                <li><a className={"hover:text-primary"} href="/">Map Search</a></li>
                <li><a className={"hover:text-primary"} href="#">Market Trends</a></li>
                <li><a className={"hover:text-primary"} href="#">Home Valuation</a></li>
                <Dropdown title={"Tools"} items={toolsOptions} onItemClick={(item) => window.open(item.url, '_blank')} />
                <button className="bg-black border-2 border-primary hover:border-secondary text-white hover:text-primary px-4 py-2 rounded">Login In</button>
                <button className="bg-secondary border-2 border-secondary text-black hover:text-white px-4 py-2 rounded">Join</button>
            </ul>
        </nav>
    )
}
