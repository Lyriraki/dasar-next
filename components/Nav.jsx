import Link from 'next/link';

const Nav = () =>(
    <div>
        <img src="/static/logo.png" alt="Logo" height="50"/>
        <Link href="/">
            <a className="btn btn-info nav-link">Home Page</a>
        </Link>
        <Link href="/about">
            <a className="btn nav-link">About Page</a>
        </Link>
        <Link href="/news">
            <a className="btn nav-link">News Page</a>
        </Link>
    </div>
)

export default Nav;