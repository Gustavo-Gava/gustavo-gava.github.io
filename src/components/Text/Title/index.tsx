import { TextProps, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TitleProps extends TextProps {
	children: ReactNode
}

export function Title({ children, ...rest }: TitleProps) {
	return (
		<Text fontSize="2xl" as="h2" {...rest}>
			{children}
		</Text>
	)
}
