import { Stack } from "@chakra-ui/react"
import { FaHome, FaTools, FaWallet } from "react-icons/fa"
import { NavLink } from "./NavLink"

export function SidebarNav() {
	return (
		<Stack spacing="8" align="flex-start">
			<NavLink icon={FaHome} href="#home">
				Home
			</NavLink>
			<NavLink icon={FaTools} href="#first-section">
				Tecnologias
			</NavLink>
			<NavLink icon={FaWallet} href="#home">
				Experiências
			</NavLink>
			<NavLink icon={FaWallet} href="#home">
				Projects
			</NavLink>
		</Stack>
	)
}
