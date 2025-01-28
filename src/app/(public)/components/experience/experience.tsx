/* ================================================================
Description: Experience
Author: Noah Huesman

Creation Date: 01/22/2025
Modification History:
#1 (01/22/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./experience.module.css"

// Components

// Mantine
import { Container, Center, Stack, Title } from "@mantine/core"

// Theme
// import { theme } from "@/app/theme"

// ========================================
// EXPERIENCE
// ========================================

export function Experience() {
	// Render
	return (
		<div
			id="experience"
			data-section
			className="h-screen border-2 border-blue-600"
		>
			<Container fluid className="border-2 border-purple-600">
				<Center>
					<Stack justify="center" align="center">
						<Title>Experience</Title>
					</Stack>
				</Center>
			</Container>
		</div>
	)
}
