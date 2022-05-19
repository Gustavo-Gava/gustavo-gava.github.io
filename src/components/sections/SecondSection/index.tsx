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
				<Title textAlign="center" fontSize="3xl">
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
						I have been working with HTML for 2 years, having experience with HTML semantic and
						derivatives.
					</TechCard>
					<TechCard title="CSS" color="#10AEFB" icon={CSSIcon}>
						I have beem working and studying CSS for 2 years, having experience with post-processors
						like SASS and libs like Styled Components.
					</TechCard>
					<TechCard title="Typescript" color="#10AEFB" icon={TypescriptIcon}>
						Studying and working with typescript for 1 year, since I started study React.
					</TechCard>
					<TechCard title="React" color="#17d8fc" icon={ReactIcon}>
						I have been working and studying with React for 1 year, having experience with hooks,
						tests, performance. I have built sites professionally with React and Nextjs.
					</TechCard>
					<TechCard title="React Native" color="#17d8fc" icon={ReactIcon}>
						Working with React Native on real projects, I was responsible for projects since ambient
						configuration to deploy to stores.
					</TechCard>
					<TechCard title="Node" color="#7cea6f" icon={NodeIcon}>
						I worked with nodejs and nestjs implemeting features on API's
					</TechCard>
				</Grid>
			</Flex>
		</Box>
	)
}
