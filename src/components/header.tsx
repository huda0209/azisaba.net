import { Link } from "gatsby"
import React from "react"

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className="header">
    <nav>
      <div className="logo">
        <Link to="/">
          <img />
          <span>{siteTitle}</span>
        </Link>
      </div>
      <div className="menu">
        <Link to="/external">外部リンク</Link>
      </div>
    </nav>
  </header>
)

export default Header
