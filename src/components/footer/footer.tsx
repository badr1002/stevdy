import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation } from '@/components/footer'





const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: '#333', py: { xs: 6, md: 10 }, color: 'primary.contrastText' , marginTop:'10rem' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }} style={{ fontSize: '3rem', fontFamily: 'system-ui', fontWeight: 'bolder' }}>
                Study
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius aliquid maiores deserunt culpa praesentium sed ut! Temporibus nulla excepturi error, explicabo nemo reiciendis quos officiis esse reprehenderit veritatis magni?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
