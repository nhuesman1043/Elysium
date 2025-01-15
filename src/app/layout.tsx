/* ================================================================
Description: Layout - Mantine configuration
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/06/2025) - Added notifications - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
import "./globals.css"

// Mantine
import "@mantine/core/styles.css"
import {
	mantineHtmlProps,
	ColorSchemeScript,
	MantineProvider,
} from "@mantine/core"

// Mantine notifications
import "@mantine/notifications/styles.css"
import { Notifications } from "@mantine/notifications"

// Theme
import { theme } from "./theme"

// Next
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

// ========================================
// METADATA
// ========================================

export const metadata: Metadata = {
	title: "Noah Huesman",
	description: "Noah Huesman's portfolio website",
}

// ========================================
// POPPINS FONT
// ========================================

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// ========================================
// LAYOUT
// ========================================

export default function Layout({ children }: { children: React.ReactNode }) {
	// Render
	return (
		<html lang="en" {...mantineHtmlProps} className={poppins.className}>
			<head>
				<ColorSchemeScript forceColorScheme="dark" />
			</head>
			<body>
				<MantineProvider forceColorScheme="dark" theme={theme}>
					<Notifications autoClose={5000} />
					{children}
				</MantineProvider>
			</body>
		</html>
	)
}
