import { Box, Container, Grid, } from '@mui/material';
import React, { FC } from 'react'
import Layer1 from '../../../public/images/layer2.png'
import Layer2 from '../../../public/images/testimonial1.png'
import Layer3 from '../../../public/images/testimonial2.png'
import Image from 'next/image'
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const AdvancedCustomerServices: FC = () => {
    return (
        <Box id="bootcamps">
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Grid container spacing={0} sx={{
                    flexDirection: { xs: 'column', md: 'unset' },
                    zIndex: '999', marginTop: '10rem',
                    'position': 'relative',
                }}>
                    <div>
                        <div style={{
                            transform: 'rotate(132deg)',
                            zIndex: 0,
                            width: '23rem',
                            borderLeft: '208px solid #f8f3f300',
                            borderRight: '50px solid #ffffff00',
                            borderTop: '227px solid #b65d5d',
                            position: 'absolute',
                            right: '82rem',
                            bottom: '51.5rem'
                        }} ></div>
                        <h5>Advanced Customer Service Platform</h5>
                        <h1 style={{ fontWeight: 'bolder', fontFamily: 'system-ui' }} >Platform Overview</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at est consequatur mollitia nostrum delectus vero ipsa voluptas alias quia aut molestias iusto nam, dolor omnis veritatis soluta. Laborum, harum!</p>
                    </div>
                    <div style={{ maxWidth: '100%' }}>
                        <Slider {...settings}  >
                            {[Layer1, Layer2, Layer3].map((image, i) => (
                                <Image key={i}
                                    src={image} className="slider-image1"
                                    alt="image" />
                            ))}
                        </Slider>
                    </div>
                </Grid>
            </Container >
        </Box>
    )
}

export default AdvancedCustomerServices;