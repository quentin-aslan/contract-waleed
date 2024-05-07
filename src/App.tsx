import Navbar from "./components/navbar/Navbar.tsx";

export default function App() {
    return (
        <div className={"bg-black h-full p-5"}>
            <Navbar/>
            <div className="text-white h-screen flex items-center justify-center">
                <h1 className="text-4xl">Hello World</h1>
            </div>
        </div>
)
}
