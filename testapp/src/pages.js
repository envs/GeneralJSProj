import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact Us]</h1>
        </div>
    );
}

export function Error404() {
    let location = useLocation();
    return (
        <div>
            <center>
            <h1>This page does not exist!!</h1>
            <p>Resource not found at {location.pathname}</p>
            </center>
        </div>
    );
}

// Subs for About Page
export function Services() {
    return (
        <div>
            <center><h2>Our Services</h2></center>
        </div>
    );
}

export function CompanyHistory() {
    return (
        <div>
            <center><h2>Our Company History</h2></center>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <center><h2>Our Location(s)</h2></center>
        </div>
    );
}