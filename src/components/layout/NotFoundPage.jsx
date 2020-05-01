import React from 'react'
import {Link} from 'react-router-dom';

export default function NotFoundPage() {
    return (
      <div className="container-fluid colored-section">
        <h1 className="section-heading">404 - Page not found</h1>
        <Link className="btn btn-dark" to="/PiFarm">Go home</Link>
      </div>
    );
}
