import { Stack } from "@chakra-ui/react"
import { FaHome, FaProjectDiagram, FaTools, FaWallet } from "react-icons/fa"
import { NavLink } from "./NavLink"

export function SidebarNav() {
	return (
		<Stack spacing="8" align="flex-start">
			<NavLink icon={FaHome} href="#home">
				Home
			</NavLink>
			<NavLink icon={FaTools} href="#techs">
				Tecnologias
			</NavLink>
			<NavLink icon={FaWallet} href="#experience">
				Experiências
			</NavLink>
			<NavLink icon={FaProjectDiagram} href="#projects">
				Projects
			</NavLink>
		</Stack>
	)
}
