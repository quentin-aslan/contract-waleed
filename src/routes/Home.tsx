import Card from "../components/Card.tsx";
import {MOCKS} from "../mocks.ts";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-5"}>
            {MOCKS.map((mock, index) => (
                    <Card key={index} {...mock} onItemClick={(item) => navigate(`/details/${item}`)} />
                )
            )}
        </div>
    )
}
