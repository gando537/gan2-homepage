import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGet_next_line from '../public/images/works/get_next_line.jpeg'
import thumblibft from '../public/images/works/libft.jpeg'
import thumbFt_printf from '../public/images/works/ft_printf.jpeg'
import thumbFt_server from '../public/images/works/ft_server.png'
import thumbCub3D from '../public/images/works/cub3D.png'
import thumbPipex from '../public/images/works/pipex.png'
import thumbMinishell from '../public/images/works/minishell.jpeg'
import thumbPhilosophers from '../public/images/works/philosophers.jpeg'
import thumbPush_swap from '../public/images/works/push_swap.jpeg'
import thumbPuissance4 from '../public/images/works/puissance4.png'
import thumbPickomino from '../public/images/works/pickomino.jpeg'

const Works = () => (
  <Layout title="Projets">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projets42
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="libft"
            title="libft"
            thumbnail={thumblibft}
          >
          Ce projet a pour but de vous faire coder en C une bibliothèque de
          fonctions usuelles que vous pourrez utiliser dans tous vos projets.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="get_next_line" title="Get_next_line" thumbnail={thumbGet_next_line}>
          Ce projet a pour but de vous faire coder une fonction en C qui renvoit une ligne
          terminée par un retour à la ligne lue depuis un descripteur de fichier.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ft_printf"
            title="ft_printf"
            thumbnail={thumbFt_printf}
          >
            Ce projet a pour but de vous faire recoder la fonction &ldquo;printf&ldquo; de C.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="ft_server" thumbnail={thumbFt_server} title="ft_server">
          Ce sujet a pour but de vous initier aux bases de l’administration système et réseau.
          Il vous permettra de procéder à l&quot;installation d&quot;un serveur web complet, a l&quot;aide
          d&quot;une technologie de déploiement nommée Docker.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="cub3D" thumbnail={thumbCub3D} title="cub3D">
          Ce projet est inspiré du jeu Wolfeinstein3D, considéré comme le premier FPS
          jamais développé. Il vous permettra d’explorer la technique du ray-casting. L&quot;objectif
          est de faire une vue dynamique au sein d’un labyrinthe, dans lequel on peut trouver
          votre chemin.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="push_swap" thumbnail={thumbPush_swap} title="push_swap">
          Ce projet vous demande de trier des données sur une pile, avec un set
          d’instructions limité, en moins de coups possibles. Pour le réussir, vous devrez
          manipuler différents algorithmes de tri et choisir la (ou les ?) solution la plus appropriée
          pour un classement optimisé des données.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="pipex" thumbnail={thumbPipex} title="pipex">
          Ce projet est la découverte en détails et par la programmation d’un mécanisme UNIX:
          l&quot;utlisation des pipes en ligne de commande.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="minishell" thumbnail={thumbMinishell} title="minishell">
          L’objectif de ce projet est de créer un shell minimaliste.
          Ça sera votre petit bash à vous.
          Vous en apprendrez beaucoup sur les processus et les descripteurs de fichier.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="philosophers" thumbnail={thumbPhilosophers} title="philosophers">
          Ce projet est une introduction au threading et aux processus, et sur comment travailler
          sur le même espace mémoire.
          Vous apprendrez à manipuler des threads.
          Vous découvrirez les mutex, les sémaphores et la mémoire partagée.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Autres
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="puissance4"
            thumbnail={thumbPuissance4}
            title="puissance4"
          >
            Le jeu puissance 4 codé en C , jouable uniquement en ligne de commande.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="pickomino" thumbnail={thumbPickomino} title="Pickomino">
          Le jeu Pickomino codé en C , jouable uniquement en ligne de commande.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
