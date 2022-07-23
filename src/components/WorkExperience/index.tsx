import { Flex, ListItem, UnorderedList, Text } from "@chakra-ui/react"
import { HighlightedText } from "../Text/HighlightedText"

import ChevronLeft from '../../assets/svg/chevron-left.svg'

interface WorkExperienceProps {
  enterprise: string;
  role: string
  startDate: string
  endDate?: string
  functionsList: string[]
}

interface Props {
  data: WorkExperienceProps
}

export function WorkExperience({ data }: Props) {
  return (
    <Flex flexDir="column" p="4" mx="auto">
      <Text fontSize="2xl">
        {data.enterprise} <HighlightedText as="span">{data.role}</HighlightedText>
      </Text>
      <Text fontSize="smaller" color="gray.200" mb="4">
        {data.startDate} - {data.endDate || "Present"}
      </Text>

      <UnorderedList
        maxW={600}
        color="gray.200"
        letterSpacing="wider"
        textAlign="justify"
        display="flex"
        flexDir="column"
        gap="4"
        style={{ listStyleImage: `url(${ChevronLeft})` }}
      >
        {data.functionsList.map(item => (
          <ListItem>
            {item}
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  )
}