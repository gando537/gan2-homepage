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

const Work = () => (
  <Layout title="ft_server">
    <Container>
      <Title>
        ft_server <Badge>2021</Badge>
      </Title>
      <UnorderedList my={4}>
        <ListItem>Vous devrez, dans un seul container Docker, mettre en place un serveur web avec Nginx.
        Le container devra tourner avec Debian Buster.</ListItem>
        <ListItem>Votre serveur devra être capable de faire tourner plusieurs services en même temps. Les services seront un Wordpress à installer par
        vous même, ainsi que Phpmyadmin et MySQL. Vous devrez vous assurer que votre base de donnée SQL fonctionne avec le wordpress et phpmyadmin.</ListItem>
        <ListItem>Votre serveur devra pouvoir, quand c’est possible, utiliser le protocole SSL.</ListItem>
        <ListItem>Vous devrez vous assurer que, selon l’url tapé, votre server redirige vers le bon site.</ListItem>
        <ListItem>Vous devrez aussi vous assurer que votre serveur tourne avec un index automatique qui doit pouvoir être désactivable.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/gando537/ft_server" target="_blank">
            ft_server <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>docker, Nginx, php, sql, wordpress, phpMyAdmin</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/docker.png" alt="ft_server" />
        <WorkImage src="/images/works/nginx.png" alt="ft_server" />
        <WorkImage src="/images/works/php.png" alt="ft_server" />
        <WorkImage src="/images/works/sql.png" alt="ft_server" />
        <WorkImage src="/images/works/wordpress.png" alt="ft_server" />
        <WorkImage src="/images/works/phpmyadmin.png" alt="ft_server" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
