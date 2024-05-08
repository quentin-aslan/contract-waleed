import Dropdown, {DropdownItem} from "./Dropdown.tsx";
import MobileDropdown from "./MobileDropdown.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Navbar() {
    const navigate = useNavigate()
    const [isMobileDropdownVisible, setIsMobileDropdownVisible] = useState(false);

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

            {/* Desktop Navbar */}
            <ul className="max-md:hidden flex space-x-4 items-center cursor-pointer">
                <li><a className={"hover:text-primary"} onClick={() => navigate('/')}>Map Search</a></li>
                <li><a className={"hover:text-primary"} onClick={() => navigate('/')}>Market Trends</a></li>
                <li><a className={"hover:text-primary"} onClick={() => navigate('/')}>Home Valuation</a></li>
                <Dropdown title={"Tools"} items={toolsOptions} onItemClick={(item) => navigate(item.url ?? '/')}/>
                <button className="bg-black border-2 border-primary hover:border-secondary text-white hover:text-primary px-4 py-2" onClick={() => navigate('/')}>
                    Login In
                </button>
                <button className="bg-secondary border-2 border-secondary text-black hover:text-white px-4 py-2" onClick={() => navigate('/')}>
                    Join
                </button>
            </ul>

            {/* Mobile Navbar */}
            <div className={"md:hidden"}>
                <MobileDropdown isDropdownVisible={isMobileDropdownVisible} setIsDropdownVisible={setIsMobileDropdownVisible} items={[]} onItemClick={() => null}>
                    <ul className="flex flex-col gap-2" onClick={() => setIsMobileDropdownVisible(false)}>
                        <li><a className={"hover:text-primary"} onClick={() => navigate('/')}>Map Search</a></li>
                        <li><a className={"hover:text-primary"} onClick={() => navigate('/')}>Market Trends</a></li>
                        <li><a className={"hover:text-primary"} onClick={() => navigate('/')}>Home Valuation</a></li>
                        <Dropdown title={"Tools"} items={toolsOptions}
                                  onItemClick={(item) => navigate(item.url ?? '/')}/>
                        <button
                            className="bg-black border-2 border-primary hover:border-secondary text-white hover:text-primary px-4 py-2"
                            onClick={() => navigate('/')}>
                            Login In
                        </button>
                        <button
                            className="bg-secondary border-2 border-secondary text-black hover:text-white px-4 py-2"
                            onClick={() => navigate('/')}>
                            Join
                        </button>
                    </ul>
                </MobileDropdown>
            </div>
        </nav>
    )
}
