import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import NotFound from "./routes/NotFound.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className={"max-md:h-full md:h-screen bg-black"}>
                <div className={"md:p-5"}>
                    <Navbar/>
                </div>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
        </BrowserRouter>
    </React.StrictMode>
)
