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
    <Layout title="philosophers">
      <Container>
        <Title>
          philosophers <Badge>2021</Badge>
        </Title>
        <P>
        Ce projet est une introduction au threading et aux processus, et sur comment travailler
        sur le même espace mémoire.
        Vous apprendrez à manipuler des threads.
        Vous découvrirez les mutex, les sémaphores et la mémoire partagée.
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/gando537/philosophers" target="_blank">
              Philosophers
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
          <WorkImage src="/images/works/philosophers.jpeg" alt="philosophers" />
        </SimpleGrid>
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
