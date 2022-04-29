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
    <Layout title="minishell">
      <Container>
        <Title>
          minishell <Badge>2022</Badge>
        </Title>
        <P>
        L’objectif de ce projet est de créer un shell minimaliste.
        Ça sera votre petit bash à vous.
        Vous en apprendrez beaucoup sur les processus, les descripteurs de fichier,
        la ligne de commande, le système de fichier, l’environnement linux.
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/gando537/minishell" target="_blank">
              Minishell
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
          <WorkImage src="/images/works/mini.gif" alt="minishell" />
        </SimpleGrid>
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
