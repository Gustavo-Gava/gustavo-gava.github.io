import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useBreakpointValue,
} from "@chakra-ui/react"

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import { SidebarNav } from "./SidebarNav"

export function Sidebar() {
	const { isOpen, onClose, onOpen } = useSidebarDrawer()

	return (
		<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent bg="gray.800" p="4">
					<DrawerCloseButton mt="6" />
					<DrawerHeader>Navegação</DrawerHeader>

					<DrawerBody>
						<SidebarNav />
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	)
}
