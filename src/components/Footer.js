import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        {/*<a href="https://ko-fi.com/taniarascia" target="_blank" rel="noopener noreferrer">*/}
          {/*Ko-Fi*/}
        {/*</a>*/}
        {/*<a href="https://patreon.com/taniarascia" target="_blank" rel="noopener noreferrer">*/}
          {/*Patreon*/}
        {/*</a>*/}
        <a href="https://twitter.com/M_WarisAli" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/warisali2" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <Link to="/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </Link>
        <a
          href="https://github.com/warisali2/warisali.ml"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
      </footer>
    )
  }
}
