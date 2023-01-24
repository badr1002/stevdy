import { Grid } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react'
import Layer2 from '../../../public/images/layer2.png'
import Image from 'next/image'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Platform: FC = () => {
    return (
        <div>
            <div style={{
                width: '15rem',
                height: '15rem',
                backgroundColor: 'rgb(218 118 118)',
                borderRadius: '102px 5rem 0px',
                zIndex: '0',
                position: 'absolute',
                top: '105rem',
                right: '111rem',
                transform: 'rotate(-11deg)'
            }}></div>
            <Grid container spacing={0} className='paltform-box' sx={{
                flexDirection: { xs: 'column', md: 'unset' }                
            }}>
                <Grid item lg={7} xs={12}>
                    <Image src={Layer2} alt='...' className='platform-layer2' />
                </Grid>
                <Grid item lg={4} xs={12} className='platform-section1'  >
                    <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui' }} ><span style={{ paddingTop: '20px', borderTop: '4px solid rgb(219, 74, 74)', borderRadius: '2px' }}>Best</span> Platform for the Technological Era</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente reiciendis commodi aperiam quae officia illum laudantium eum, iusto autem officiis at. Temporibus, ut? Amet veritatis nulla dolor enim quo.</p>
                    <Link href={'#'} style={{ color: 'rgb(219, 74, 74)', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'system-ui' }}>Learn About Our Success  <ArrowRightAltIcon sx={{ color: 'rgb(219, 74, 74)' }} />  </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Platform;