import Logo from '@Assets/logo.svg'
import LogoR from '@Assets/react.svg'

import { Link } from 'react-router-dom'
import React, {useState} from 'react'

/* Styles */
import { Box, Button, Image, Heading, Flex, Stack } from '@chakra-ui/react'
import { Footer } from '@Components'

export default function (props: any) {
  return (
	  <>
			<Flex align="center" justify="center" pt={100} pb={65}>
			  <a href="https://reactjs.org" target="_blank">
          <Image src={Logo} alt="React logo" width={100} align="center" />
        </a>
			</Flex>
      <Heading color="white" align="center" pb={50}>APY Dashboard</Heading>
			<Stack spacing={4} align='center' pb={140}>
        <Link to="/login">
				<Button bg="black" color="white">
            Login
          </Button>
        </Link>
				<Link to="/endpoints">
				<Button bg="black" color="white">
            Endpoints
          </Button>
        </Link>
			</Stack>
		<Footer/>
	</>
  );
}