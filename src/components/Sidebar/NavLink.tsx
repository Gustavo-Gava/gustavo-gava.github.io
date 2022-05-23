import { Icon, Link, Text } from "@chakra-ui/react"
import { ElementType, ReactElement, ReactNode } from "react"

interface NavLinkProps {
	icon: ElementType
	children: ReactNode
	href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
	return (
		<Link display="flex" alignItems="center" href={href} {...rest}>
			<Icon as={icon} fontSize="20" />
			<Text ml="4" fontWeight="medium">
				{children}
			</Text>
		</Link>
	)
}
