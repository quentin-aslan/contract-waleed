import {MockType} from "../mocks.ts";
import Bed from "./icons/Bed.tsx";
import Bathroom from "./icons/Bathroom.tsx";
import Parking from "./icons/Parking.tsx";

type CardProps = MockType & {
    onItemClick: (id: string) => void
}

export default function Card(props: CardProps) {
    const randomAnimation = Math.random() > 0.5 ? 'animate-fade-in-move-left' : 'animate-fade-in-move-right';

    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div onClick={() => props.onItemClick(props.type)}
             className={`group bg-black text-white border-2 border-primary hover:border-secondary p-1 overflow-hidden flex flex-col gap-1 cursor-pointer ${randomAnimation}`}>
            <div className={"bg-dark-secondary flex justify-center group-hover:text-secondary"}>{props.type}</div>
            <div className="relative">
                <img src={props.image} alt={props.type} className="w-full h-48 object-cover object-center"/>
                <div className={`absolute bottom-0 left-0 ${props.isForSale ? 'bg-primary group-hover:bg-secondary' : 'bg-secondary group-hover:bg-primary' } text-white p-1 m-1`}>{props.isForSale ? "For Sale" : "For Rental"}</div>
            </div>
            <div className={"flex flex-col gap-1"}>
                <div className={"flex justify-between"}>
                    <span>Listed: <span className={"text-primary group-hover:text-secondary"}>$ {formatPrice(props.price)}</span></span>
                    <span>{new Date(props.date).toDateString()}</span>
                </div>
                <span>{props.address}</span>
                <div className="flex flex-row justify-between">
                    <span>{props.type}</span>
                    <span className={"flex flex-row justify-between gap-2"}>
                        <span className={"mr-1 flex flex-row items-center"}><span className={"text-primary group-hover:text-secondary h-4 w-4 mr-1"}><Bed /></span> {props.rooms}</span>
                        <span className={"mr-1 flex flex-row items-center"}><span className={"text-primary group-hover:text-secondary h-4 w-4 mr-1"}><Bathroom /></span> {props.bathrooms}</span>
                        <span className={"mr-1 flex flex-row items-center"}><span className={"text-primary group-hover:text-secondary h-3 w-4 mr-1"}><Parking /></span> {props.parking}</span>
                    </span>
                </div>
                <hr/>
                <div className={"text-left text-xs text-gray-300"}>{props.agency}</div>
            </div>
        </div>
    )
}
