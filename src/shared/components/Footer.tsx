import React from 'react'

function Footer() {
    return (
        <footer className="px-4 flex justify-center mx-auto py-5">
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    )
}

export default Footer