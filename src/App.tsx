import { Box } from "@chakra-ui/react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { FirstSection } from "./components/sections/FirstSection"
import { GetInTouchSection } from "./components/sections/GetInTouchSection"
import { SecondSection } from "./components/sections/SecondSection"
import { ThirdSection } from "./components/sections/ThirdSection"
import { Sidebar } from "./components/Sidebar"

import "./App.css"

export default function App() {
	return (
		<Box scrollBehavior="smooth">
			<Header />

			<Sidebar />

			<FirstSection />

			<SecondSection />

			<ThirdSection />

			<GetInTouchSection />

			<Footer />
		</Box>
	)
}
