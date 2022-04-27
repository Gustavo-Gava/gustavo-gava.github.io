import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import { TechCard } from "../../TechCard"

import ReactIcon from "../../../assets/svg/reactjs-icon.svg?component"

export function SecondSection() {
	return (
		<Box h="calc(100vh)">
			<Flex maxW={1440} py="10" flexDir="column" mx="auto">
				<Text as="h2" textAlign="center" fontSize="2xl">
					Tecnologias
				</Text>

				<Grid
					autoFlow="row"
					templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
					gridColumnGap="40"
					gridRowGap="12"
					justifyContent="space-between"
					justifyItems="center"
					alignContent="center"
					mt="6"
				>
					<TechCard title="React" color="#10AEFB" icon={ReactIcon} />
					<TechCard title="React" color="#10AEFB" icon={ReactIcon} />
					<TechCard title="React" color="#10AEFB" icon={ReactIcon} />
					<TechCard title="React" color="#10AEFB" icon={ReactIcon} />
					<TechCard title="React" color="#10AEFB" icon={ReactIcon} />
					<TechCard title="React" color="#10AEFB" icon={ReactIcon} />
					<TechCard title="React" color="#10AEFB" icon={ReactIcon} />
				</Grid>
			</Flex>
		</Box>
	)
}
