import { Grid } from '@mui/material';
import React, { FC } from 'react'

import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
 


const steps = [
    {
        label: 'Market Research',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim explicabo consectetur totam laudantium nobis iusto dolorem alias tempore! Odio repellendus dicta in quis explicabo a quos earum, doloribus maiores?`,
    },
    {
        label: 'Market Research',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim explicabo consectetur totam laudantium nobis iusto dolorem alias tempore! Odio repellendus dicta in quis explicabo a quos earum, doloribus maiores?',
    },
    {
        label: 'Market Research',
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim explicabo consectetur totam laudantium nobis iusto dolorem alias tempore! Odio repellendus dicta in quis explicabo a quos earum, doloribus maiores?`,
    },
];

const Accerelation: FC = () => {
    return (
        <div style={{ marginTop: '15rem' }} id='howItWork'>

            <Grid container spacing={0} sx={{
                flexDirection: { xs: 'column', md: 'unset' }
            }}>
                <Grid item lg={2}></Grid>
                <Grid item lg={3} >
                    <h4>Advanced Platform</h4>
                    <h1 style={{ fontSize: '3rem', fontFamily: 'system-ui'  }}>Take your team to the next level</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim explicabo consectetur totam laudantium nobis iusto dolorem alias tempore! Odio repellendus dicta in quis explicabo a quos earum, doloribus maiores?</p>
                    <Button className='aboutUs-btn' variant="outlined">About us</Button>
                </Grid>
                <Grid item lg={1}></Grid>
                <Grid item lg={4} >
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={3} orientation="vertical" >
                            {steps.map((item) => (
                                <Step key={item.label} active={true}>
                                    <StepLabel icon={<i style={{ padding: '15px', backgroundColor: 'rgb(219, 74, 74)', borderRadius: '100%', color: '#fff', fontWeight: 'bolder' }}>1</i>} >
                                        <h3 style={{ fontWeight:'bolder',fontFamily: 'system-ui' }}>{item.label}</h3>
                                    </StepLabel>
                                    <StepContent >{item.description}</StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Grid>
                <Grid item lg={2}></Grid>



            </Grid>
        </div>
    )
}

export default Accerelation;