import { Text, TextProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TechTextProps extends TextProps {
	children?: ReactNode
}

export function TechText({ children, ...rest }: TechTextProps) {
	return (
		<Text
			fontFamily="Roboto Mono"
			fontStyle="italic"
			fontSize="10"
			py="1"
			px="2"
			borderRadius="full"
			bgColor="#328BC2"
			transitionDuration="0.3s"
			_hover={{
				cursor: "default",
				bgColor: "#328BC2AA",
			}}
			{...rest}
		>
			{children}
		</Text>
	)
}
