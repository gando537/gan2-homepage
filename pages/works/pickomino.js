import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Pickomino">
    <Container>
      <Title>
        Pickomino <Badge>2021</Badge>
      </Title>
      <P>
      Le jeu Pickomino codé en C , jouable uniquement en ligne de commande.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gando537/Pickominos" target="_blank">
          Pickomino
          <ExternalLinkIcon mx="2px" />
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
      <WorkImage src="/images/works/pickomino.jpeg" alt="Pickomino" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
