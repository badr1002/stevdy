import { Grid } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react'
import Layer2 from '../../../public/images/layer2.png'
import Image from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const BestPlatform: FC = () => {
    return (
        <div className='bestPlatform-box'    >
            <div className='box-layer2' style={{
                width: '74rem',
                height: '104rem',
                backgroundImage: 'linear-gradient(to right, rgb(218, 118, 118),rgb(148, 70, 70))',
                backgroundColor: '',
                borderRadius: '137px 150px 0px',
                zIndex: 0,
                position: 'absolute',
                top: '232rem',
                right: ' -59rem',
                transform: 'rotate(-60deg)'
            }}></div>
            <Grid container spacing={0} sx={{
                flexDirection: { xs: 'column', md: 'unset' },
                'position': 'relative', marginTop: '6rem'
            }}>
                <Grid item lg={2} xs={0}></Grid>
                <Grid item lg={4} xs={12} sx={{ marginTop: '15rem' }}>
                    <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui' }} ><span style={{ paddingTop: '20px', borderTop: '4px solid rgb(219, 74, 74)', borderRadius: '2px' }}>Best</span> Platform for the Technological Era</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente reiciendis commodi aperiam quae officia illum laudantium eum, iusto autem officiis at. Temporibus, ut? Amet veritatis nulla dolor enim quo.</p>
                    <Link href={'#'} style={{ color: 'rgb(219, 74, 74)', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'system-ui' }}>Learn About Our Success  <ArrowRightAltIcon sx={{ color: 'rgb(219, 74, 74)' }} />  </Link>
                </Grid>
                <Grid item lg={6} xs={12} >
                    <Image src={Layer2} alt='...' className='bestPlatform-layer2'  />
                </Grid>
            </Grid>
        </div>
    )
}

export default BestPlatform;