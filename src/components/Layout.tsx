import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Search from './Search'

interface Props {
    children: ReactElement
}

// TODO if !Admin dont show "Authoren Anlegen" and "Neue Review" (add Login)
// Navigation Links
export default function Layout(props: Props): ReactElement {
    return (
        <>
            <div className="ui secondary pointing menu">
                <NavLink exact to="/home" className="item">Home</NavLink>
                <NavLink to="/reviews" className="item">Reviews</NavLink>
                <NavLink to="/reviews/coming-soon" className="item">Coming Soon</NavLink>
                <NavLink to="/authors" className="item">Authoren</NavLink>
                <NavLink to="/authors/new" className="item">Authoren Anlegen</NavLink>
                <NavLink to="/reviews/new" className="item">Neue Review{/* <img src='../icon/new.png' /> */}</NavLink>
                {/* TODO ICON Pfad anpassen */}
                <div className="right menu">
                    <Search />
                </div>
            </div>
            <Header />
            <div className="ui container">
                {props.children}
            </div>
        </>
    )
}
