import { Box, Flex, Button, Text, Link } from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"
import { Title } from "../../Text/Title"

export function GetInTouchSection() {
	return (
		<Box as={Fade}>
			<Flex maxW={1200} h="100%" py="10" px="4" flexDir="column" mx="auto">
				<Title textAlign="center" fontSize="2xl" fontFamily="Roboto Mono" color="highlighted.400">
					<Text display="inline" fontSize="xl">
						04.
					</Text>{" "}
					O que mais?
				</Title>

				<Box textAlign="center" mx="auto">
					<Title mx="auto" mt="8" fontSize="3xl" color="gray.100">
						Entre em contato
					</Title>

					<Text color="gray.200" my="6">
						Seja para contato profissional ou somente para dar um alô, meu e-mail está disponível
						abaixo.
					</Text>

					<Link href="mailto:gustavogava123@hotmail.com">
						<Button colorScheme="linkedin" variant="outline" p="8">
							Say hello!
						</Button>
					</Link>
				</Box>
			</Flex>
		</Box>
	)
}
