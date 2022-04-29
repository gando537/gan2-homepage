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
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        puissance4 <Badge>2021</Badge>
      </Title>
      <P>Le jeu puissance 4 codé en C , jouable uniquement en ligne de commande.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gando537/Puissance4" target="_blank">
          Puissance 4
          <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS</span>
        </ListItem>
        <ListItem>
          <Meta>Langage</Meta>
          <span>Langage C</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/puissance4.png" alt="puissance4" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
