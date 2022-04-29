import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="libft">
      <Container>
        <Title>
          pipex <Badge>2021</Badge>
        </Title>
        <P>
        Ce projet est la découverte en détails et par la programmation d’un mécanisme UNIX.
        L’utilisation des pipes de la liigne de commande linux.
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/gando537/pipex" target="_blank">
              Pipex
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MACOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Langage</Meta>
            <span>Langage C</span>
          </ListItem>
        </List>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/pip.jpeg" alt="pipex" />
        </SimpleGrid>
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
