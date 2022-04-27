import { Flex, Icon, Box, Text } from "@chakra-ui/react"
import { FaReact } from "react-icons/fa"
import ReactLogo from '../../assets/svg/reactjs-icon.svg?component'

export function TechCard() {
	return (
		<Flex w="80" flexDir="column" alignItems="flex-start"  p="6" borderRadius="8" borderWidth="1px" borderColor="red.800">
			<Box borderRadius="full" p="4" backgroundColor="rgba(0, 174, 255, 0.2)">
				<ReactLogo width={24} height={24}/>
			</Box>

			<Text as="h2" fontSize="1xl">
				React
			</Text>

			<Text>I have been working with React for 2 years on a variety of different projects.</Text>
		</Flex>
	)
}
