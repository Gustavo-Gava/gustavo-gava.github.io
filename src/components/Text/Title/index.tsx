import { TextProps, Text } from "@chakra-ui/react"

interface TitleProps extends TextProps {
	children: string
}

export function Title({ children, ...rest }: TitleProps) {
	return (
		<Text fontSize="2xl" as="h2" {...rest}>
			{children}
		</Text>
	)
}
