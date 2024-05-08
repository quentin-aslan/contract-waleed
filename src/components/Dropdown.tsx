import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";

export type DropdownItem = {
    id: string,
    label: string,
    url?: string,
    dropdownOptions?: DropdownItem[]
}

type DropdownProps = {
    title: string,
    items: DropdownItem[]
    onItemClick: (item: DropdownItem) => void
}

export default function Dropdown({ title, items, onItemClick }: DropdownProps) {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const location = useLocation();

    useEffect(() => {
        setIsDropdownVisible(false);
    }, [location]);

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
        <div className="relative z-20" ref={dropdownRef}>
            <button onClick={toggleDropdown}
                    className="max-md:w-full bg-black border-2 border-primary hover:border-secondary text-white px-4 py-2 hover:text-primary flex flex-row items-center">
                {title}
                <svg className={`fill-current transition-transform ${isDropdownVisible ? 'rotate-180' : ''}`} width="20"
                     height="20" viewBox="0 0 20 20">
                    <path d="M5 8l5 5 5-5z"/>
                </svg>
            </button>

            {isDropdownVisible && (
                <div
                    className={`absolute bg-black border-2 border-primary max-md:border-t-0 text-white p-2 md:mt-4 flex flex-col gap-2`}>
                    {items.map((item) => (
                        <a className={"cursor-pointer whitespace-nowrap hover:text-primary"} key={item.id} onClick={() => {
                            onItemClick(item)
                        }}>{item.label}</a>
                    ))}
                </div>
            )}
        </div>
    )
}
