import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Layer1 from '../../../public/images/layer1.png'
import Image from 'next/image'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Image src={Layer1} alt='...' className='layer1' />
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
