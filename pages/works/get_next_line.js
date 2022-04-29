import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Get_next_line">
    <Container>
      <Title>
        Get_next_line <Badge>2021-</Badge>
      </Title>
      <P>
      Le but de ce projet est de créer une fonction qui lit un fichier et
      renvoie à chaque appel une nouvelle ligne sans retour à la ligne à partir de ce fichier.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gando537/get_next_line" target="_blank">
          get_next_line <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Langage</Meta>
          <span>Langage C</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/gnl.jpeg" alt="Get_next_line" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
