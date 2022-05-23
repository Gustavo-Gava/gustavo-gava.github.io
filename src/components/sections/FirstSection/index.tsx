import { Box, Flex, Text } from "@chakra-ui/react"

import WavesPng from "../../../assets/png/waves.png"
import { HighlightedText } from "../../HighlightedText"
import { NormalText } from "../../Text/NormalText"
import { Title } from "../../Text/Title"

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
			id="home"
		>
			<Flex
				w="100%"
				maxW={1440}
				h="100%"
				mx="auto"
				px="10"
				justify="space-between"
				alignItems="center"
				id="first-section"
			>
				<Flex flexDir="column" maxW={800}>
					<Text fontSize={["md", "2xl"]} fontFamily="Roboto">
						OLÁ 👋, EU SOU
					</Text>
					<Title fontSize={["2xl", "7xl"]} fontFamily="body">
						Gustavo Gava
					</Title>
					<NormalText fontSize={["md", "2xl"]} fontFamily="body">
						Sou um <HighlightedText>Desenvolvedor Front-end</HighlightedText>, tendo experiência
						profissional no desenvolvimento de aplicativos e sites com React e React Native.
					</NormalText>
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
