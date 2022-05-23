import { Box, Button, Divider, Flex, Icon, Text } from "@chakra-ui/react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { Title } from "../Text/Title"

export function Footer() {
	return (
		<Box as="footer" maxW={1200} mx="auto">
			<Divider mb="8" />

			<Flex w="full" align="center" justify="center" gap="8" fontSize="2xl">
				<Button height="auto" p="4" bg="gray.800" color="gray.300" borderRadius="full">
					<Icon as={FaGithub} />
				</Button>
				<Button height="auto" p="4" bg="gray.800" color="gray.300" borderRadius="full">
					<Icon as={FaLinkedin} />
				</Button>
				<Button height="auto" p="4" bg="gray.800" color="gray.300" borderRadius="full">
					<Icon as={FaEnvelope} />
				</Button>
			</Flex>

			<Text textAlign="center" my="8" color="gray.200" pb="8">
				Copyright © 2022 - Gustavo Gava
			</Text>
		</Box>
	)
}
