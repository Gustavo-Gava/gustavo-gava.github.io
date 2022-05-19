import { TextProps, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface HighlightedTextProps extends TextProps {
	children: ReactNode
}

export function HighlightedText({ children, ...rest }: HighlightedTextProps) {
	return (
		<Text color="#10AEFB" fontWeight="bold" {...rest}>
			{children}
		</Text>
	)
}
