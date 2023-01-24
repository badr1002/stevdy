import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Button } from '@mui/material'
import Layer2 from '../../../public/images/layer2.png'
import Bench from '../../../public/images/bench.png'
import Bumble from '../../../public/images/bumble.png'
import Forbes from '../../../public/images/forbes.png'
import Nearpod from '../../../public/images/nearpod.png'
import Shopify from '../../../public/images/shopify.png'
import Image from 'next/image'






const HomeHero: FC = () => {
  return (
    <Box id="hero" >
      <Container maxWidth="lg">
        <Grid container spacing={0} className='hero' sx={{
          flexDirection: { xs: 'column', md: 'unset' }
        }}>
          <Grid item lg={4} xs={12}>
            <h4>Advanced Platform</h4>
            <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui' }}>Take your team to the next level</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odit blanditiis ratione corporis.</p>
            <Button className='aboutUs-btn2' variant="outlined">About us</Button>
          </Grid>
          <Grid item lg={1} xs={0}></Grid>
          <Grid item lg={7} xs={12}>
            <Image className='hero-layer2' src={Layer2} alt='...' />
          </Grid>

          <Grid item lg={12} className='brandBox' >
            <Grid container>
              <Grid item lg={2} xs={6}>
                <Image src={Shopify} className='brand' alt='Shopify' />
              </Grid>
              <Grid item lg={2} xs={6}>
                <Image src={Nearpod} className='brand' alt='Nearpod' />
              </Grid>
              <Grid item lg={2} xs={6}>
                <Image src={Bench} className='brand' alt='Bench' />
              </Grid>
              <Grid item lg={2} xs={6}>
                <Image src={Forbes} className='brand' alt='Forbes' />
              </Grid>
              <Grid item lg={2} xs={6}>
                <Image src={Bumble} className='brand' alt='Bumble' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>


      </Container>
    </Box>
  )
}

export default HomeHero
