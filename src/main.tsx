import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext"
import { theme } from "./styles/theme"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<SidebarDrawerProvider>
				<App />
			</SidebarDrawerProvider>
		</ChakraProvider>
	</React.StrictMode>
)
