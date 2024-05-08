import {useEffect, useRef, useState} from "react";
import {DropdownItem} from "./Dropdown.tsx";
import MenuBars from "./icons/MenuBars.tsx";

export type MobileDropdownItem  = DropdownItem

type MobileDropdownProps = {
    children?: React.ReactNode,
    items: MobileDropdownItem[]
    onItemClick: (item: MobileDropdownItem) => void
}

export default function MobileDropdown({ children, items, onItemClick}: MobileDropdownProps) {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-10" ref={dropdownRef}>
            <button onClick={toggleDropdown}>
                <MenuBars />
            </button>
            {isDropdownVisible && (
                <div
                    className="fixed top-0 left-0 w-full max-w-screen mt-20 bg-black border-2 border-primary text-white p-2 flex flex-col gap-2 overflow-auto">
                    {items.map((item) => (
                        <a className="cursor-pointer whitespace-nowrap hover:text-primary" key={item.id}
                           onClick={() => {
                               onItemClick(item);
                           }}>{item.label}</a>
                    ))}
                    {children}
                </div>
            )}

        </div>
    )
}
