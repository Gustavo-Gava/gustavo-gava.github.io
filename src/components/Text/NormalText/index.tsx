import { TextProps, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface NormalTextProps extends TextProps {
	children: ReactNode
}

export function NormalText({ children, ...rest }: NormalTextProps) {
	return (
		<Text color="gray.200" {...rest}>
			{children}
		</Text>
	)
}
