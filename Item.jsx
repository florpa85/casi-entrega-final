import React from 'react'
import{Card, Image, Stack, Button, CardBody, CardFooter, Text, Flex, Box, ButtonGroup, Heading, Divider, Wrap} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Item =({
  producto
}) =>{



  return (
    <>
    <Flex spacing='30px' align='center' templatecolumns='repeat(5, 1fr)' >
        <Card w='400px'  align='center'>
          <CardBody>
            <Box>
              <Image src={producto.img}></Image>
            </Box>
            <Stack mt='6' spacing='3'align='center'>
              <Heading size='md'>
                {producto.name}
              </Heading>
            </Stack>
          </CardBody>

          <Divider />

          <CardFooter >
            <Link to={`/item/${producto.id}`}>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorschemeb='blackAlpha'>
                  Ver mas
                </Button>
              </ButtonGroup>
            </Link>
          </CardFooter>
        </Card>
    </Flex>
    </>
  )
}

export default Item