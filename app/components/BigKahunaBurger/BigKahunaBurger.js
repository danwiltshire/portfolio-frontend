import React from 'react'
import Designs from '../Designs'
import Photographs from '../Photographs'

const BigKahunaBurger = () => (
  <div>

    <header>
      <h1>Daniel Wiltshire</h1>
      <span>Hey, nice to meet you!</span>

      <p>I’m an IT Infrastructure Security Administrator for apetito UK where I implement strong and usable IT security solutions. In my spare time, I play a variety of instruments, shoot photographs, design websites and build my skill-set in my home lab.</p>

      <a
        href="https://www.linkedin.com/in/danielwiltshire/"
        title="See my profile on LinkedIn">
        LinkedIn Profile
      </a>
    </header>

    <section>

      <h2>Photography</h2>

      <Photographs />

      <h2>Design</h2>

      <Designs />

      <h2>This isn&apos;t just static HTML&hellip;</h2>

      <p>Here are a few things that make my portfolio beautifully complex:</p>

      <ul>
        <li>Written in JavaScript using React</li>
        <li>Uses Build tools such as NodeJS, Babel and Webpack</li>
        <li>Static HTML and media deployed to S3</li>
        <li>Media accessed via REST API (AWS API Gateway and stateless Lambda functions)</li>
        <li>Fully serverless</li>
        <li>Deployment is automated using Travis CI</li>
        <li>The code is open source. Checkout my <a href="https://github.com/danwiltshire/">GitHub profile</a>!</li>
      </ul>

    </section>

  </div>
)

export default BigKahunaBurger
