import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ft_printf">
    <Container>
      <Title>
        ft_printf <Badge>2021</Badge>
      </Title>
      <P>
      Vous devez recoder la fonction printf de la librairie C.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gando537/ft_printf" target="_blank">
            ft_printf <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platfome</Meta>
          MacOS
        </ListItem>
        <ListItem>
          <Meta>Langage</Meta>
          Langage C
        </ListItem>
      </List>
      <WorkImage src="/images/works/ftprintf.jpeg" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
