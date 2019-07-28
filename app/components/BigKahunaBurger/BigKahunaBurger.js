import React from 'react'

import PersonList from '../PersonList'

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

    <main>

      <h2>Photography</h2>

      <article className="gallery_image">
        <a
          href="https://danielwiltshire.co.uk/images/photography/louisiana_design_museum_1.jpg">
          <img
            src="https://danielwiltshire.co.uk/images/photography/louisiana_design_museum_1_small.jpg"
            alt="Looking Glass at Louisiana Design Museum, Copenhagen"
          />
        </a>
      </article>

      <article className="gallery_image">
        <a
          href="https://danielwiltshire.co.uk/images/photography/sankt_jorgens_so_sunset.jpg">
          <img
            src="https://danielwiltshire.co.uk/images/photography/sankt_jorgens_so_sunset_small.jpg"
            alt="Sankt Jørgens Sø at sunset, Copenhagen"
          />
        </a>
      </article>

      <article className="gallery_image">
        <a
          href="https://danielwiltshire.co.uk/images/photography/louisiana_design_museum_2.jpg">
          <img
            src="https://danielwiltshire.co.uk/images/photography/louisiana_design_museum_2_small.jpg"
            alt="Museum Gardens at Louisiana Design Museum, Copenhagen"
          />
        </a>
      </article>

      <h2>Design</h2>

      <article className="gallery_image">
        <a
          href="https://danielwiltshire.co.uk/images/design/block_planet_mc.jpg">
          <img
            src="https://danielwiltshire.co.uk/images/design/block_planet_mc_small.jpg"
            alt="BlockPlanetMC, a website for a Minecraft gaming community"
          />
        </a>
      </article>

      <article className="gallery_image">
        <a
          href="https://danielwiltshire.co.uk/images/design/aviation_festival.jpg">
          <img
            src="https://danielwiltshire.co.uk/images/design/aviation_festival_small.jpg"
            alt="Poster for Bristol's Aviation Festival, 2014"
          />
        </a>
      </article>

      <article className="gallery_image">
        <a
          href="https://danielwiltshire.co.uk/images/design/online_art_gallery.jpg">
          <img
            src="https://danielwiltshire.co.uk/images/design/online_art_gallery_small.jpg"
            alt="Online art gallery for student work"
          />
        </a>
      </article>

      <h2>Lab</h2>

      <h3>Tutorials</h3>

      <article>
        <a
          href="https://github.com/XeonFibre/tutorials/blob/master/deploying-elk-stack-using-the-foreman.md"
          title="How to deploy Elasticsearch, Logstash and Kibana using The Foreman">
          Deploying an ELK Stack using The Foreman
        </a>
      </article>

    </main>

  </div>
)

export default BigKahunaBurger
