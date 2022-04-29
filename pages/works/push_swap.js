import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const Work = () => (
    <Layout title="push_swap">
      <Container>
        <Title>
          push_swap <Badge>2021</Badge>
        </Title>
        <P>
        Le projet Push_swap est un projet d’algo simple et efficace : il faut trier. Vous avez
        à votre disposition un ensemble d’entiers, deux piles, et un ensemble d’instructions pour
        manipuler les piles.
        Votre but ? Ecrire deux programmes en C :
      </P>
        <UnorderedList my={4}>
          <ListItem>Un premier nommé checker qui prend des entiers en paramètres et qui lit des
            instructions sur l’entrée standard. Une fois ces instructions lues, checker les exécute
            puis affiche OK si les entiers sont triés, ou KO sinon.</ListItem>
          <ListItem>Un second nommé push_swap qui calcule et affiche sur la sortie standard le plus
            petit programme dans le langage des instructions de Push_swap qui trie les entiers
            passés en paramètre.</ListItem>
        </UnorderedList>

        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/gando537/push_swap" target="_blank">
              push_swap <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Langage</Meta>
            <span>Langage C</span>
          </ListItem>
        </List>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/push1.png" alt="push_swap" />
          <WorkImage src="/images/works/push2.png" alt="push_swap" />
        </SimpleGrid>
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
