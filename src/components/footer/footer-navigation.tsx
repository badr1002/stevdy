import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { FooterSectionTitle } from '@/components/footer'
import { Button } from '@mui/material'

const noseServices: Array<Navigation> = [
  {
    label: 'Avis clients',
    path: '#',
  },
  {
    label: 'Mentions Legales',
    path: '#',
  },
  {
    label: 'Plan du site',
    path: '#',
  },
  {
    label: "Blog d'ldeematic",
    path: '#',
  },
  {
    label: "Le dictiannaire du digital",
    path: '#',
  },
  {
    label: ", Notre boutique /,",
    path: '#',
  },
]




interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref
      style={{
        display: 'block',
        textDecoration: 'none',
        color: '#fff',
      }}>

      {label}
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Nos Services" />
        {noseServices.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid>
      <Grid item xs={12} md={8}>
        <FooterSectionTitle title="Sign up for Special Offers!" />
        <br />
        <input type={'text'} placeholder={'Mail'} style={{ borderRadius: '25px', border: 'none', padding: '1rem' }} />
        <Button variant="outlined" style={{ backgroundColor: 'rgb(219, 74, 74)', color: '#fff', fontWeight: 'bolder', borderRadius: '25px', width: '10rem', padding: '1rem' }}>Subscribe</Button>
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
