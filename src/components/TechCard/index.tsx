import { Flex, Icon, Box, Text, FlexProps } from "@chakra-ui/react"
import { ReactElement } from "react"
import { FaReact } from "react-icons/fa"
import ReactLogo from "../../assets/svg/reactjs-icon.svg?component"

interface TechCardProps extends FlexProps {
	title: string
	color: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	children: string
}

export function TechCard({ title, color, icon: Icon, children, ...rest }: TechCardProps) {
	console.log(color)

	return (
		<Flex
			w={320}
			p="6"
			flexDir="column"
			alignItems="flex-start"
			bgColor="gray.800"
			borderBottomWidth={10}
			borderBottomColor={color}
			borderBottomStyle="solid"
			borderRadius="8"
			boxShadow="0 1.6rem 2.4rem rgb(0 0 0 / 25%);"
			{...rest}
		>
			<Box borderRadius="full" p="4" mb="4" backgroundColor={`${color}CC`}>
				<Icon width={34} height={34} />
			</Box>

			<Text as="h2" fontSize="1xl" fontWeight="bold">
				{title}
			</Text>

			<Text>{children}</Text>
		</Flex>
	)
}
