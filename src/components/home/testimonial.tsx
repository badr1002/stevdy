import { Container, Grid, } from '@mui/material';
import React, { FC } from 'react'
import { Button } from '@mui/material'

import Layer1 from '../../../public/images/layer2.png'
import Layer2 from '../../../public/images/testimonial1.png'
import Layer3 from '../../../public/images/testimonial2.png'
import Image from 'next/image'
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const userData = [
    {
        id: 1,
        name: 'Florrie Jacobs',
        image: Layer3,
        title: 'CEO of company',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptate quos non fuga numquam laudantium necessitatibus ex enim, doloremque, dolor possimus fugit! Tempore harum quo exercitationem delectus consequatur amet voluptatem.',
        rate: 5
    },
    {
        id: 2,
        name: 'Florrie Jacobs',
        image: Layer2,
        title: 'CEO of company',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptate quos non fuga numquam laudantium necessitatibus ex enim, doloremque, dolor possimus fugit! Tempore harum quo exercitationem delectus consequatur amet voluptatem.',
        rate: 5
    },
    {
        id: 3,
        name: 'Florrie Jacobs',
        image: Layer1,
        title: 'CEO of company',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, voluptate quos non fuga numquam laudantium necessitatibus ex enim, doloremque, dolor possimus fugit! Tempore harum quo exercitationem delectus consequatur amet voluptatem.',
        rate: 5
    }
]


const Testimonial: FC = () => {
    return (
        <Box id='testimonial'>
            <Container maxWidth="lg"  >
                <Grid container spacing={0} sx={{
                    flexDirection: { xs: 'column', md: 'unset' },
                    zIndex: '999', marginTop: '10rem',
                    'position': 'relative',
                }}>
                    <Grid item lg={4} xs={0}></Grid>
                    <Grid item lg={4} xs={12}>
                        <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui' }}>Dont't Just Take our Word for it!</h1>
                    </Grid>
                    <Grid item lg={4} xs={0}></Grid>
                    <Grid container spacing={0} sx={{
                        flexDirection: { xs: 'column', md: 'unset' },
                        zIndex: '999', marginTop: '10rem',
                        'position': 'relative',
                    }}>
                        <Grid item lg={3} xs={12}>
                            <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui', color: 'rgb(222, 50, 50)' }}>570</h1>
                            <h3>Download</h3>
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui', color: 'rgb(222, 50, 50)' }}>570</h1>
                            <h3>Active User</h3>
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui', color: 'rgb(222, 50, 50)' }}>570</h1>
                            <h3>Positive Feedback</h3>
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui', color: 'rgb(222, 50, 50)' }}>570</h1>
                            <h3>+ rating</h3>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} sx={{
                        flexDirection: { xs: 'column', md: 'unset' },
                        zIndex: '999', marginTop: '5rem',
                        'position': 'relative',
                    }}>
                        <Grid item lg={6} xs={12}>
                            <div style={{ maxWidth: '100%' }}>
                                <Slider {...settings}  >
                                    {userData.map((user, i) => (
                                        <Card sx={{ minWidth: 275 }} key={i}>
                                            <CardContent>
                                                <Grid container spacing={0} sx={{
                                                    flexDirection: { xs: 'column', md: 'unset' },
                                                }}>
                                                    <Grid item lg={6}>
                                                        <Image key={i}
                                                            src={user.image}
                                                            alt="image" style={{ width: '15rem', height: '15rem', borderRadius: '15px' }} />
                                                    </Grid>
                                                    <Grid item lg={4}>
                                                        <h2>{user.name}</h2>
                                                        <h5>{user.title}</h5> <br />
                                                        <p>{user.desc}</p>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Slider>
                            </div>
                        </Grid>
                        <Grid item lg={1}></Grid>
                        <Grid item lg={5} >
                            <h1 style={{ fontSize: '3rem', fontFamily: 'system-ui', fontWeight: 'bolder' }}>Grow Your Business and Join Our Happy Users</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim explicabo consectetur totam laudantium nobis iusto dolorem alias tempore! Odio repellendus dicta in quis explicabo a quos earum, doloribus maiores?</p>
                            <Button className='aboutUs-btn' variant="outlined">About us</Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Container >
        </Box>
    )
}

export default Testimonial;