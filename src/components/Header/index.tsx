import {
	Avatar,
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	IconButton,
	Link,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"

export function Header() {
	const { isOpen, onClose, onOpen } = useSidebarDrawer()

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false,
	})

	if (isDrawerSidebar)
		return (
			<Box w="full" position="fixed" top="0" zIndex={2} bg="#1F2029AA">
				<Flex as="header" w="full" align="center" justify="space-between" h={70} p="4">
					<Flex alignItems="center">
						<Avatar
							mr="2"
							name="Gustavo Gava"
							src="https://avatars.githubusercontent.com/u/77810817?v=4"
						/>
						<Text fontFamily="Roboto Mono" fontSize="xl">
							Gustavo Gava
						</Text>
					</Flex>

					<IconButton
						icon={<Icon as={FaBars} />}
						aria-label="Menu"
						bg="transparent"
						color="gray.300"
						variant="unstyled"
						fontSize="24"
						onClick={onOpen}
					/>
				</Flex>
			</Box>
		)

	return (
		<Box w="full" position="fixed" top="0" zIndex={2} bg="#1F2029AA">
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
					<Avatar
						mr="2"
						name="Gustavo Gava"
						src="https://avatars.githubusercontent.com/u/77810817?v=4"
					/>
					<Text fontFamily="Roboto Mono" fontSize="xl">
						Gustavo Gava
					</Text>
				</Flex>

				<Flex>
					<HStack spacing="8">
						<Link href="#home">Home</Link>
						<Link href="#techs">Tecnologias</Link>
						<Link href="#experience">Experiências</Link>
						<Link href="#projects">Projects</Link>
					</HStack>
				</Flex>
			</Flex>
		</Box>
	)
}
