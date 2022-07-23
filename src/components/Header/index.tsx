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
import { useEffect, useState } from "react"
import { Slide } from "react-awesome-reveal"
import { FaBars } from "react-icons/fa"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"

export function Header() {
	const { isOpen, onClose, onOpen } = useSidebarDrawer()

	const [headerHeight, setHeaderHeight] = useState(70)
	const [isScrollingDown, setIsScrollingDown] = useState(false)
	const [scrollY, setScrollY] = useState(0)

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false,
	})

	useEffect(() => {
		const threshold = 0
		let lastScrollY = window.pageYOffset
		let ticking = false

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset

			setScrollY(scrollY)

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				ticking = false
				return
			}

			setIsScrollingDown(scrollY > lastScrollY)
			lastScrollY = scrollY > 0 ? scrollY : 0
			ticking = false
		}

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir)
				ticking = true
			}
		}

		window.addEventListener("scroll", onScroll)

		return () => window.removeEventListener("scroll", onScroll)
	}, [isScrollingDown])

	useEffect(() => {}, [])

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
		<Box
			w="full"
			maxH={isScrollingDown ? 0 : 60}
			transition="all 0.6s"
			overflow="hidden"
			position="fixed"
			top="0"
			zIndex={2}
			bg={scrollY ? "#1F2029" : "transparent"}
			as={Slide}
			direction="down"
			fontFamily="Roboto Mono"
			fontSize="small"
		>
			<Flex
				as="header"
				maxW={1440}
				h={62}
				mx="auto"
				alignItems="center"
				justify="space-between"
				px="10"
				py="6"
			>
				<Flex alignItems="center">
					<Avatar
						mr="2"
						name="Gustavo Gava"
						src="https://avatars.githubusercontent.com/u/77810817?v=4"
					/>
				</Flex>

				<Flex>
					<HStack spacing="8">
						<Link
							href="#home"
							_hover={{
								color: "highlighted.400",
							}}
						>
							01. Home
						</Link>
						<Link
							href="#techs"
							_hover={{
								color: "highlighted.400",
							}}
						>
							02. Tecnologias
						</Link>
						<Link
							href="#experience"
							_hover={{
								color: "highlighted.400",
							}}
						>
							03. Experiências
						</Link>
						<Link
							href="#projects"
							_hover={{
								color: "highlighted.400",
							}}
						>
							04. Projects
						</Link>
					</HStack>
				</Flex>
			</Flex>
		</Box>
	)
}
