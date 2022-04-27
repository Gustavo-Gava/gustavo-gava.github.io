import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import { TechCard } from "../../TechCard"

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
					gridGap="2"
					justifyItems="center"
					alignContent="center"
					px="2"
					mt="6"
				>
					<TechCard />
					<TechCard />
					<TechCard />
					<TechCard />
					<TechCard />
					<TechCard />
					<TechCard />
				</Grid>
			</Flex>
		</Box>
	)
}
