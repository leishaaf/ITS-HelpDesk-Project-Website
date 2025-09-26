import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
    return (
        <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className="cute-font text-success">ITS Help Desk Home Page</h1>
            <h2>Where to Find Us: </h2>
            <h3> Main Campus </h3>
                <p> Monday - Thursday | 7:30am - 8:30pm </p>
                <p> Friday | 7:30am - 7:00pm </p>
                <p> Saturday | 10:00am - 6:00pm </p>
                <p> Sunday | CLOSED </p>
            <a href="http://usf.service-now.com/usf?id=usf_kb_article&sys_id=63ef6fd73beb26143d0bbd8c24e45a95">For More Details Visit:</a>
            <h2> Guides to Common Issues: </h2>
                <p><a href="https://gradapply.usfca.edu/www/documents/Reset+myUSF+password+.pdf">Password Setup For First Time Users</a></p>
                <p> <a href="https://usf.service-now.com/usf?id=usf_kb_article&sys_id=e6f38357878d3990cec8642e8bbb350e">How to register you device to USFConnect</a></p>
                <p> <a href="/guides/zoom-login.html" target="_blank">How to Login to Zoom Via SSO</a></p>
                <p> <a href="/guides/reset-pass.html" target="_blank">How to Reset your USF Password </a></p>
       </div>
    );
}

