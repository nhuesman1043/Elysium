/* ================================================================
Description: About
Author: Noah Huesman

Creation Date: 01/17/2025
Modification History:
#1 (01/17/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./about.module.css"

// Components

// Mantine
import { Container } from "@mantine/core"

// Theme
// import { theme } from "@/app/theme"

// ========================================
// ABOUT
// ========================================

export function About() {
	// Render
	return (
		<div
			id="about"
			data-section
			className="h-screen border-2 border-red-600"
		>
			<Container size="xl" className="border-2 border-green-600">
				about
			</Container>
		</div>
	)
}
