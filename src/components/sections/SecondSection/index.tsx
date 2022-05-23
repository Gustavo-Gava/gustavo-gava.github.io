import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import { TechCard } from "../../TechCard"

import HTMLIcon from "../../../assets/svg/html5-icon.svg?component"
import CSSIcon from "../../../assets/svg/css-icon.svg?component"
import TypescriptIcon from "../../../assets/svg/typescript-icon.svg?component"
import ReactIcon from "../../../assets/svg/reactjs-icon.svg?component"
import NextIcon from "../../../assets/svg/nextjs-icon.svg?component"
import NodeIcon from "../../../assets/svg/nodejs-icon.svg?component"
import { Title } from "../../Text/Title"

export function SecondSection() {
	return (
		<Box minH="calc(100vh)">
			<Flex
				maxW={1440}
				minH="calc(100vh)"
				py="10"
				flexDir="column"
				mx="auto"
				align="space"
				justifyContent="center"
			>
				<Title textAlign="center" fontSize="2xl" fontFamily="Roboto Mono" id="techs">
					<Text display="inline" fontSize="xl" color="highlighted.400">
						01.
					</Text>{" "}
					Tecnologias
				</Title>

				<Grid
					templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
					gridColumnGap="40"
					gridRowGap="12"
					justifyContent="space-between"
					justifyItems="center"
					alignContent="center"
					mt="6"
					m="auto"
				>
					<TechCard title="HTML" color="#e2502f" icon={HTMLIcon}>
						Tenho contato com HTML há 2 anos através de estudo e prática profissional, tendo
						experiência com HTML semântico e boas práticas.
					</TechCard>
					<TechCard title="CSS" color="#10AEFB" icon={CSSIcon}>
						Tenho contato com CSS há 2 anos atráves de estudo e prática profissional, já tive
						experiência com pré-processadores como SASS, Styled Componentes e libs como Chakra UI e
						TailwindCSS.
					</TechCard>
					<TechCard title="Typescript" color="#10AEFB" icon={TypescriptIcon}>
						Trabalho com Typescript desde quando tive o meu primeiro contato com React, e acredito
						que seja uma tecnologia indispensável para todo tipo de projeto.
					</TechCard>
					<TechCard title="React" color="#17d8fc" icon={ReactIcon}>
						Tive o meu primeiro contato na trilha do Ignite, e desde então venho estudando e
						trabalhando com React, tendo experiência com testes unitários, boas práticas e
						performance.
					</TechCard>
					<TechCard title="React Native" color="#17d8fc" icon={ReactIcon}>
						Tive contato com React Native devido uma demanda profissional, então pude absorver muito
						conhecimento e experiência nessa Tecnologia, tendo em vista que já tinha uma experiência
						com React.
					</TechCard>
					<TechCard title="Node" color="#7cea6f" icon={NodeIcon}>
						Trabalhei com Nodejs implementando features em um projeto profissional.
					</TechCard>
				</Grid>
			</Flex>
		</Box>
	)
}
