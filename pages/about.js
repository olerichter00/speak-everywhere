import React from "react"

import { Header } from "../components"
import styles from "../styles/about.module.scss"

const About = () => (
  <div>
    <Header />
    <main className={styles.about}>
      <h1>About</h1>
      <p>
        <b>Speak Everywhere</b> is a language learning app that automatically
        detects the user's location and provides basic vocabulary and phrases to
        learn the local language.
      </p>
      <p>
        The app was written by{" "}
        <a href="https://www.olerichter.eu/" target="_blank" rel="noopener">
          Ole Richter
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/olerichter00/speak-everywhere"
          target="_blank"
          rel="noopener"
        >
          open source
        </a>
        .
      </p>
    </main>
  </div>
)

export default About
