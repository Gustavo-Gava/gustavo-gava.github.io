import { Box } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { FirstSection } from "./components/sections/FirstSection"
import { SecondSection } from "./components/sections/SecondSection"
import { ThirdSection } from "./components/sections/ThirdSection"

export default function App() {
	return (
		<Box>
			<Header />

			<FirstSection />

			<SecondSection />

			<ThirdSection />
		</Box>
	)
}
