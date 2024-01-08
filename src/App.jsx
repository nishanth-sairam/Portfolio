import { useState } from "react";
import Header from "./components/header/Header";
import { DesktopContainer } from "./App.sytle";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import Projects from "./components/projects/Projects";
import Hero from "./components/hero/hero";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Desktop />}>
                    <Route index element={<Hero />} />
                    <Route path="work" element={<Work />} />
                    <Route path="project" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export const Desktop = (props) => {
    return (
        <>
            <DesktopContainer>
                <Header />
                <Outlet />
            </DesktopContainer>
        </>
    );
};

export default App;
