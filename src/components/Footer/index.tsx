import { Box, Button, Divider, Flex, Icon, Link, Text } from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { Title } from "../Text/Title"

export function Footer() {
	return (
		<Box as={Fade} delay={300}>
			<Box as="footer" maxW={1200} mx="auto">
				<Divider mb="8" />

				<Flex w="full" align="center" justify="center" gap="8" fontSize="2xl">
					<Link href="https://github.com/Gustavo-Gava" target="_blank">
						<Button height="auto" p="4" bg="gray.800" color="gray.300" borderRadius="full">
							<Icon as={FaGithub} />
						</Button>
					</Link>

					<Link href="https://www.linkedin.com/in/gustavo-gava/" target="_blank">
						<Button height="auto" p="4" bg="gray.800" color="gray.300" borderRadius="full">
							<Icon as={FaLinkedin} />
						</Button>
					</Link>

					<Link href="mailto:gustavogava123@hotmail.com">
						<Button height="auto" p="4" bg="gray.800" color="gray.300" borderRadius="full">
							<Icon as={FaEnvelope} />
						</Button>
					</Link>
				</Flex>

				<Text textAlign="center" my="8" color="gray.200" pb="8">
					Copyright © 2022 - Gustavo Gava
				</Text>
			</Box>
		</Box>
	)
}
