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
    <Layout title="cub3D">
      <Container>
        <Title>
          cub3D <Badge>2021</Badge>
        </Title>
        <UnorderedList my={4}>
          <ListItem>Cub3D est une aire de jeu remarquable pour explorer les applications
            pratique des mathématiques sans avoir a en comprendre les spécificités.</ListItem>
        </UnorderedList>

        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/gando537/cub3D" target="_blank">
              cub3D <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>MacOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Langage</Meta>
            <span>Langage C, minilibx</span>
          </ListItem>
        </List>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/cub.png" alt="ft_server" />
        </SimpleGrid>
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
