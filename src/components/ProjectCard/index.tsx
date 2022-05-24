import { Box, Flex, Link, useBreakpointValue } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Fade, Slide } from "react-awesome-reveal"
import { HighlightedText } from "../Text/HighlightedText"

import { TechText } from "../Text/TechText"
import { Title } from "../Text/Title"

interface ProjectCardProps {
	backgroundImageUrl: string
	children: ReactNode
	title: string
	techs: string[]
	imageLeftSide?: boolean
	projectLink?: string
	type: "Projeto Pessoal" | "Projeto Profissional"
}

export function ProjectCard({
	backgroundImageUrl,
	title,
	techs,
	imageLeftSide = false,
	projectLink = "#",
	type,
	children,
}: ProjectCardProps) {
	const isMobile = useBreakpointValue({
		base: true,
		lg: false,
	})

	if (isMobile) {
		return (
			<Box
				p="4"
				bg="gray.750"
				borderRadius="base"
				maxW={500}
				bgPosition="center"
				bgSize="cover"
				style={{
					backgroundImage: `linear-gradient(rgba(30,30,30,0.9), rgba(30,30,30,0.8)), url(${backgroundImageUrl})`,
				}}
			>
				<HighlightedText fontFamily="Roboto Mono" fontStyle="italic" fontSize="small">
					Projeto Pessoal
				</HighlightedText>

				<Link href={projectLink} target="_blank" textDecoration="underline">
					<Title mb="2" fontSize="2xl">
						{title}
					</Title>
				</Link>

				{children}

				<Flex as="footer" gap="2" mt="4" flexWrap="wrap">
					{techs.map((tech: string) => (
						<TechText key={tech}>{tech}</TechText>
					))}
				</Flex>
			</Box>
		)
	}

	return (
		<Flex my="8" as={Fade} delay={300}>
			{imageLeftSide ? (
				<>
					<Link href={projectLink} target="_blank">
						<Box
							w={800}
							h={390}
							borderRadius="base"
							bgSize="cover"
							style={{
								backgroundImage: `url(${backgroundImageUrl})`,
							}}
							_hover={{
								backgroundImage: `linear-gradient(rgba(50, 138, 194, 0.0), rgba(50, 138, 194, 0.0)), url(${backgroundImageUrl})`,
								cursor: "pointer",
								transitionDuration: 0.2,
							}}
						/>
					</Link>

					<Flex flexDir="column" justify="center" textAlign="right" maxW={500}>
						<HighlightedText fontFamily="Roboto Mono" fontStyle="italic" fontSize="small">
							{type}
						</HighlightedText>

						<Title mb="2" fontSize="2xl" display="inline">
							{title}
						</Title>

						<Box p="4" borderRadius="8" bgColor="gray.800" ml="-20">
							{children}
						</Box>

						<Flex as="footer" gap="2" mt="4" flexWrap="wrap" justify="flex-end">
							{techs.map((tech: string) => (
								<TechText key={tech}>{tech}</TechText>
							))}
						</Flex>
					</Flex>
				</>
			) : (
				<>
					<Flex flexDir="column" justify="center" maxW={500}>
						<HighlightedText fontFamily="Roboto Mono" fontStyle="italic" fontSize="small">
							Projeto Pessoal
						</HighlightedText>

						<Title mb="2" fontSize="2xl">
							{title}
						</Title>

						<Box p="6" borderRadius="8" bgColor="gray.800" mr="-20" zIndex={1}>
							{children}
						</Box>

						<Flex as="footer" gap="2" mt="4" flexWrap="wrap">
							{techs.map((tech: string) => (
								<TechText key={tech}>{tech}</TechText>
							))}
						</Flex>
					</Flex>

					<Link href={projectLink} target="_blank">
						<Box
							w={800}
							h={390}
							borderRadius="base"
							bgSize="cover"
							style={{
								backgroundImage: `linear-gradient(rgba(50, 139, 194, 0.1), rgba(50, 139, 194, 0.1)), url(${backgroundImageUrl})`,
							}}
							_hover={{
								backgroundImage: `linear-gradient(rgba(50, 138, 194, 0.0), rgba(50, 138, 194, 0.0)), url(${backgroundImageUrl})`,
								cursor: "pointer",
								transitionDuration: 0.2,
							}}
						/>
					</Link>
				</>
			)}
		</Flex>
	)
}
