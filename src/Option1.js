import React from "react"
import imagepath from "./images/Mail.svg"
import imagepath2 from "./images/linkedin.svg"
export default function Option1() {
    return(
        <div className="box">
            <div className="child-top-box"/>
            <div className="child-mid-box">
                <div className="label-box1">
                    <div className="midbox-header-title">Dmitri Morozov</div>
                </div>
                <div className="label-box2">
                    <div className="frontend-developer">Frontend developer</div>
                </div>
                <div className="email-link-box"><a href="mailto:dmitri.m80@gmail.com" 
                target="_blank" className="email1">dmitri.m80@gmail.com</a></div>
                
                <div className="buttons-box">
                    <button className="button-email">
                        <div className="mail-icon"><img src={imagepath}></img></div>
                        <div className="button-text">Email</div>
                    </button>
                    <button className="button-linkedin">
                        <div className="linkedin-icon"><img src={imagepath2}></img></div>
                        <div className="button-linkedin-text">LinkedIn</div>
                    </button>
                </div>
                
            </div>
            <div className="child-bottom-box" />
        </div>
    )
}