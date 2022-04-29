import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const LogoImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Je suis développeur en full-stack!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gando Diallo
          </Heading>
          <p>Étudiant en informatique à UCA & école 42 Nice </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/gan2_42.jpeg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Box>
      <LogoImage
              src="/images/logoC.jpeg"
              alt="Logo C"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoC++.png"
              alt="Logo C++"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoJava.jpeg"
              alt="Logo Java"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoPython.jpeg"
              alt="Logo Python"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoJavaScript.jpeg"
              alt="Logo JavaScript"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoReact.png"
              alt="Logo React"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoPHP.jpeg"
              alt="Logo PHP"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoHtml.png"
              alt="Logo Html"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoCSS.png"
              alt="Logo CSS"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      <LogoImage
              src="/images/logoR.jpeg"
              alt="Logo R"
              borderRadius='full'
              width="50%"
              height="50%"
            />
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projet
        </Heading>
        <Paragraph>
          Je suis un développeur full-stack basé à Nice avec un
          passion pour la création de services/choses numériques. Je suis à l&apos;aise
          pour tout ce qui concerne le développement de projet, de la planification
          et de la conception de tous les moyens de résoudre des problèmes réels avec
          du code, dans divers langages de programmation.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mon portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          né à Mampatim (Kolda), Sénégal.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Licence en info-com à l&apos;UCA.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Maitrise en info-com à l&apos;UCA.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Début de formation à l&apos;école 42
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Licence 2 Informatioque à l&apos;université UCA
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          J&apos;♥
        </Heading>
        <Paragraph>
          Art, Musique, Jeux, Sport (football)
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Dans le web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/gando537" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @gando537
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/gandohd" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @gandohd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/mouhamedgando.diallo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @gandohd
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/gan2.hd/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @gan2.hd
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
