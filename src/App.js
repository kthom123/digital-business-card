import React from "react"
import Header from "./Header.js"
import Footer from "./Footer.js"
import About from "./About.js"

export default function App() {
    return(
        <div className="border-box">
            <div className="container">
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    )
}
