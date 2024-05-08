import Navbar from "./components/Navbar.tsx";
import Card from "./components/Card.tsx";
import {MOCKS} from "./mocks.ts";

export default function App() {
    return (
        <div className={"h-full md:h-screen  bg-black"}>
            <div className={"md:p-5"}>
                <Navbar />
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-5"}>
                {MOCKS.map((mock, index) => (
                        <Card key={index} {...mock} onItemClick={(item) => console.log(item)} />
                    )
                )}
            </div>
        </div>
)
}
