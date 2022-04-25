import { Text } from "@chakra-ui/react"

interface HighlightedTextProps {
  children: string
}

export function HighlightedText({ children }: HighlightedTextProps) {
  return (
    <Text fontWeight="bold" color="highlighted.400" display="inline-block">
      {children}
    </Text>
  )
}
