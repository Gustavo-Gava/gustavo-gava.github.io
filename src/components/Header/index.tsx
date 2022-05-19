import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react"

export function Header() {
	return (
		<Box w="full" position="fixed" top="0">
			<Flex
				as="header"
				maxW={1440}
				h={70}
				mx="auto"
				alignItems="center"
				justify="space-between"
				px="10"
				py="10"
			>
				<Flex alignItems="center">
					<Avatar mr="2" name="Gustavo Gava" />
					<Text>Gustavo Gava</Text>
				</Flex>

				<Flex>
					<HStack spacing="8">
						<Text>Home</Text>
						{/* <Text>Tecnologias</Text>
						<Text>Experiências</Text>
						<Text>Projects</Text> */}
					</HStack>
				</Flex>
			</Flex>
		</Box>
	)
}
