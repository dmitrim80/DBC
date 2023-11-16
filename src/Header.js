import React from "react"
import imagepath from "./images/dm-profile.png"

export default function Header() {
    return (
            <div className="HeaderBox">
                <img src={imagepath} className="header-image"/>
            </div>
    )
}
 
