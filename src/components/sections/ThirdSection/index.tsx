import { Box, Divider, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import ChevronLeft from "../../../assets/svg/chevron-left.svg"

export function ThirdSection() {
	return (
		<Box minH="calc(100vh)">
			<Flex maxW={1440} h="100%" py="10" flexDir="column" mx="auto" align="center">
				<Text as="h2" fontSize="4xl">
					Experience
				</Text>

				<Flex flexDir="column" p="4">
					<Text fontSize="2xl">
						Arkos Digital{" "}
						<Text color="#10AEFB" as="span">
							@Desenvolvedor Fullstack
						</Text>
					</Text>
					<Text fontSize="smaller" color="gray.200">
						September 2021 - May 2022
					</Text>

					<UnorderedList
						maxW={600}
						color="gray.200"
						letterSpacing="wider"
						textAlign="justify"
						display="flex"
						flexDir="column"
						gap="4"
						style={{ listStyleImage: `url(${ChevronLeft})` }}
					>
						<ListItem mt="4">
							Desenvolvimento de aplicativos mobile com React Native, sendo responsável desde a
							configuração do ambiente de desenvolvimento, até a postagem do aplicativo para as
							stores
						</ListItem>
						<ListItem>
							Desenvolvimento de sites com React e Next.js, sendo responsável pela criação e deploy
							de websites.
						</ListItem>
						<ListItem>
							Desenvolvimento do backend com Node.js e Nest.js, sendo responsável pela criação e
							implementação de features.
						</ListItem>
						<ListItem>
							Comunicação e explicação de features do projeto diretamente com o cliente e
							internamente.
						</ListItem>
					</UnorderedList>
				</Flex>
			</Flex>
		</Box>
	)
}
