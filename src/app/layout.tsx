/* ================================================================
Description: Layout - Mantine configuration
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/06/2025) - Added notifications - Noah Huesman
#3 (01/21/2025) - Added smooth scroll - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
import "./globals.css"

// Lenis
import "lenis/dist/lenis.css"

// Scroll wrapper
import ScrollWrapper from "@/app/scroll-wrapper"

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
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"

// ========================================
// METADATA
// ========================================

export const metadata: Metadata = {
	title: "Noah Huesman",
	description: "Noah Huesman's portfolio website",
}

// ========================================
// VIEWPORT
// ========================================

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	userScalable: false,
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
					<ScrollWrapper>{children}</ScrollWrapper>
				</MantineProvider>
			</body>
		</html>
	)
}
