//@flow
import React from 'react'

import { Header, Image, Icon, Button, Grid, Container, List } from 'semantic-ui-react'
import LightboxCardGroup from './components/LightboxCardGroup';

const App = () => (
  <div>
    <Grid columns={1} padded>
      <Grid.Row>
        <Container textAlign='center'>
          <Image centered circular size='small' src='/images/avatar/small/headshot.jpg' />
          <Header as='h1'>
            <Header.Content>Daniel Wiltshire</Header.Content>
            <Header.Subheader>Hey, nice to meet you!</Header.Subheader>
          </Header>
          <p>I’m an IT Infrastructure Security Administrator for apetito UK where I implement strong and usable IT security solutions. In my spare time, I play a variety of instruments, shoot photographs, design websites and build my skill-set in my home lab.</p>
          <a href="https://www.linkedin.com/in/danielwiltshire/">
            <Button color='linkedin'>
              <Icon name='linkedin' /> linkedIn
            </Button>
          </a>
        </Container>
      </Grid.Row>
      <hr />
      <Grid.Row>
        <Container textAlign='center'>
          <Header as='h2'>Photography</Header>
          <LightboxCardGroup
            items={[
              {
                Header: "Looking Glass",
                Meta: "Louisiana Design Museum, Copenhagen",
                SmallImageSrc: "/images/photography/louisiana_design_museum_1_small.jpg",
                LargeImageSrc: "/images/photography/louisiana_design_museum_1.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Sankt Jørgens Sø at Sunset",
                Meta: "Sankt Jørgens Sø, Copenhagen",
                SmallImageSrc: "/images/photography/sankt_jorgens_so_sunset_small.jpg",
                LargeImageSrc: "/images/photography/sankt_jorgens_so_sunset.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Sankt Jørgens Sø at Dusk",
                Meta: "Sankt Jørgens Sø, Copenhagen",
                SmallImageSrc: "/images/photography/sankt_jorgens_so_dusk_small.jpg",
                LargeImageSrc: "/images/photography/sankt_jorgens_so_dusk.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Gardens",
                Meta: "Louisiana Design Museum, Copenhagen",
                SmallImageSrc: "/images/photography/louisiana_design_museum_2_small.jpg",
                LargeImageSrc: "/images/photography/louisiana_design_museum_2.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Jewellery",
                Meta: "Photo shoot for Italian Heart Handmade",
                SmallImageSrc: "/images/photography/italian_heart_handmade_2_small.jpg",
                LargeImageSrc: "/images/photography/italian_heart_handmade_2.jpg",
                AdditionalURLs:
                  [
                    {
                      Name:"Italian Heart Handmade",
                      URL: "https://linktr.ee/italianhearthandmade",
                      Icon: "linkify",
                      Color: "green" // Semantic UI colour
                    }
                  ],
              },
              {
                Header: "Jewellery 2",
                Meta: "Photo shoot for Italian Heart Handmade",
                SmallImageSrc: "/images/photography/italian_heart_handmade_1_small.jpg",
                LargeImageSrc: "/images/photography/italian_heart_handmade_1.jpg",
                AdditionalURLs:
                  [
                    {
                      Name:"Italian Heart Handmade",
                      URL: "https://linktr.ee/italianhearthandmade",
                      Icon: "linkify",
                      Color: "green" // Semantic UI colour
                    }
                  ],
              }
            ]}
          />
        </Container>
      </Grid.Row>
      <Grid.Row>
        <Container textAlign='center'>
          <Header as='h2'>Design</Header>
          <LightboxCardGroup
            items={[
              {
                Header: "BlockPlanetMC",
                Meta: "Website for a Minecraft community",
                SmallImageSrc: "/images/design/block_planet_mc_small.jpg",
                LargeImageSrc: "/images/design/block_planet_mc.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Aviation Festival",
                Meta: "Poster for Bristol's Aviation Festival",
                SmallImageSrc: "/images/design/aviation_festival_small.jpg",
                LargeImageSrc: "/images/design/aviation_festival.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Online Art Gallery",
                Meta: "Online art gallery for student work",
                SmallImageSrc: "/images/design/online_art_gallery_small.jpg",
                LargeImageSrc: "/images/design/online_art_gallery.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Hills Property Rentals",
                Meta: "University Project",
                SmallImageSrc: "/images/design/hpr_dashboard_small.jpg",
                LargeImageSrc: "/images/design/hpr_dashboard.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Policy Editor",
                Meta: "BSc (Hons) Dissertation Artifact",
                SmallImageSrc: "/images/design/policy_editor_small.jpg",
                LargeImageSrc: "/images/design/policy_editor.png",
                AdditionalURLs: []
              },
              {
                Header: "Effects of Social Media",
                Meta: "University Project",
                SmallImageSrc: "/images/design/social_effects_small.jpg",
                LargeImageSrc: "/images/design/social_effects.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Writhlington Media",
                Meta: "Student-run Media Business",
                SmallImageSrc: "/images/design/writhlington_media_small.jpg",
                LargeImageSrc: "/images/design/writhlington_media.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Cassidy Gregory Electrical",
                Meta: "Portfolio Website",
                SmallImageSrc: "/images/design/cassidygregory_small.jpg",
                LargeImageSrc: "/images/design/cassidygregory.jpg",
                AdditionalURLs: []
              },
              {
                Header: "Docu.io",
                Meta: "Customisable IT documentation platform",
                SmallImageSrc: "/images/design/docu_io_small.jpg",
                LargeImageSrc: "/images/design/docu_io.jpg",
                AdditionalURLs: []
              },
              {
                Header: "REDLUX MEDIA",
                Meta: "Logo for a design house",
                SmallImageSrc: "/images/design/red_lux_media_small.jpg",
                LargeImageSrc: "/images/design/red_lux_media.jpg",
                AdditionalURLs: []
              },
              {
                Header: "MacTools Online",
                Meta: "Middleware for Mac management software",
                SmallImageSrc: "/images/design/mac_tools_online_small.jpg",
                LargeImageSrc: "/images/design/mac_tools_online.jpg",
                AdditionalURLs: []
              }
            ]}
          />
        </Container>
      </Grid.Row>
      <Grid.Row>
        <Container textAlign='center'>
          <Header as='h2'>Lab</Header>
          <Header as='h3'>Tutorials</Header>
          <List divided relaxed>
            <List.Item>
              <List.Content>
                <List.Header><a target="_blank" rel='noreferrer noopener' href='https://github.com/XeonFibre/tutorials/blob/master/deploying-elk-stack-using-the-foreman.md'>Deploying an ELK stack using The Foreman</a></List.Header>
                <List.Description>Deploying Elasticsearch, Logstash and Kibana using The Foreman</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Container>
      </Grid.Row>
      <hr />
    </Grid>
  </div>
)

export default App