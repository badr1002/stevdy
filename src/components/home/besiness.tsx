import { Container, Grid, Button, Box } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ScaleIcon from '@mui/icons-material/Scale';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';


const Besiness: FC = () => {
    return (
        <Box id='browser'>
            <Container maxWidth="lg">
                <Grid container spacing={0} sx={{
                    flexDirection: { xs: 'column', md: 'unset' },
                    zIndex: '999', marginTop: '10rem',
                    'position': 'relative',
                }}>
                    <Grid item lg={4} xs={12}>
                        <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui' }} ><span style={{ paddingTop: '20px', borderTop: '4px solid rgb(219, 74, 74)', borderRadius: '2px' }}>The</span> best business solution for you</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente reiciendis commodi aperiam quae officia illum laudantium eum, iusto autem officiis at. Temporibus, ut? Amet veritatis nulla dolor enim quo.</p>
                        <Link href={'#'} style={{ color: 'rgb(219, 74, 74)', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'system-ui' }}>Learn About Our Success  <ArrowRightAltIcon sx={{ color: 'rgb(219, 74, 74)' }} />  </Link>
                    </Grid>
                    <Grid item lg={1} xs={0}></Grid>
                    <Grid item lg={7} xs={12}>
                        <Grid container style={{marginTop:'1rem'}}>
                            <Grid item lg={6} xs={6}>
                                <ScaleIcon sx={{
                                    padding: '30px', color: '#fff', fontSize: '6rem', backgroundColor: 'rgb(243, 30, 30)',
                                    borderRadius: '50px', marginBottom: '2rem'
                                }} />
                                <h5><span style={{ paddingBottom: '20px', borderBottom: '4px solid rgb(219, 74, 74)', borderRadius: '2px' }}>Scale your</span> activity</h5><br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odit blanditiis ratione corporis.</p>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <CurrencyBitcoinIcon sx={{
                                    padding: '30px', color: '#fff', fontSize: '6rem', backgroundColor: 'rgb(25, 198, 166)',
                                    borderRadius: '50px', marginBottom: '2rem'
                                }} /><br />
                                <h5><span style={{ paddingBottom: '20px', borderBottom: '4px solid rgb(219, 74, 74)', borderRadius: '2px' }}>Bootcamps</span></h5><br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odit blanditiis ratione corporis.</p>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <HighQualityIcon sx={{
                                    padding: '30px', color: '#fff', fontSize: '6rem', backgroundColor: 'rgb(206, 64, 235)',
                                    borderRadius: '50px', marginBottom: '2rem'
                                }} /><br />
                                <h5><span style={{ paddingBottom: '20px', borderBottom: '4px solid rgb(219, 74, 74)', borderRadius: '2px' }}>Hight Quality</span></h5><br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odit blanditiis ratione corporis.</p>
                            </Grid>
                            <Grid item lg={6} xs={6}>
                                <BusinessCenterIcon sx={{
                                    padding: '30px', color: '#fff', fontSize: '6rem', backgroundColor: 'rgb(144, 235, 33)',
                                    borderRadius: '50px', marginBottom: '2rem'
                                }} /><br />
                                <h5><span style={{ paddingBottom: '20px', borderBottom: '4px solid rgb(219, 74, 74)', borderRadius: '2px' }}>Get Certification</span></h5><br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odit blanditiis ratione corporis.</p>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Besiness;