import { Box, Flex, Text } from "@chakra-ui/react"

import WavesPng from "../../../assets/png/waves.png"
import { HighlightedText } from "../../HighlightedText"

export function FirstSection() {
	return (
		<Box
			w="100%"
			h="calc(100vh)"
			bg="gray.800"
			bgImage={WavesPng}
			bgPosition="bottom"
			bgSize="contain"
			bgRepeat="no-repeat"
		>
			<Flex
				w="100%"
				maxW={1440}
				h="100%"
				mx="auto"
				px="10"
				justify="space-between"
				alignItems="center"
			>
				<Flex flexDir="column" maxW={800}>
					<Text fontSize="2xl" fontFamily="Roboto">
						HI THERE 👋, I'M
					</Text>
					<Text fontSize="7xl" fontFamily="body">
						Gustavo Gava
					</Text>
					<Text fontSize="2xl" fontFamily="body">
						I'm a <HighlightedText>Front-end developer</HighlightedText>, having professional
						experience in development with React and React Native
					</Text>
				</Flex>

				{/* <Flex height="100%" alignItems="flex-end">
					<Flex flexDir="column" alignItems="center" mb="-12">
						<Text mb="2">Scroll</Text>
						<Box w="1px" h={250} bgColor="gray.200" />
					</Flex>
				</Flex> */}
			</Flex>
		</Box>
	)
}
