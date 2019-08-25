import React from 'react'
import Designs from '../Designs'
import Photographs from '../Photographs'

const BigKahunaBurger = () => (
  <div>

    <header>

      <table>
        <tr>
          <td>


          <div className="title-with-subtitle">
        <h1>Daniel Wiltshire</h1>
        <h3>Specialist in IT Security</h3>
      </div>

      <div className="button">
        <a
          href="https://www.linkedin.com/in/danielwiltshire/"
          title="See my profile on LinkedIn">
          LinkedIn
        </a>
      </div>

          </td>
          <td>


            
      <p>I’m a Service Delivery Engineer for NCR where I automate the delivery of mission-critical SaaS applications worldwide.</p>

<p>In my spare time I play a variety of instruments, shoot photos, design web apps and build my skillset in a home lab.</p>


          </td>
        </tr>
      </table>



    </header>

    <section>

      <h2>Photography</h2>

      <Photographs />

      <h2>Design</h2>

      <Designs />

      <h2>Powered by</h2>

      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Travis CI</li>
        <li>NodeJS, Babel and Webpack</li>
        <li>AWS S3, API Gateway and Lambda</li>
        <li>The code is open source - checkout my <a href="https://github.com/danwiltshire/">GitHub profile</a>!</li>
      </ul>

    </section>

  </div>
)

export default BigKahunaBurger
