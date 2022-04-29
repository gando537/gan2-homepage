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
        libft <Badge>2021</Badge>
      </Title>
      <P>
      On doit recoder un ensemble de fonctions de la libc
      telles que décrites dans leur man respectif sur notre système. Les fonctions devront avoir
      exactement le même prototype et le même comportement que les originales. Leur nom
      devra être préfixé par “ft_”. Par exemple strlen devient ft_strlen.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gando537/libft" target="_blank">
            Libft
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MACOS</span>
        </ListItem>
        <ListItem>
          <Meta>Langage</Meta>
          <span>Langage C</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/lib.jpeg" alt="lib" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
