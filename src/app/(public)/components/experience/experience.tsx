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
import { Container, Space, Stack, Title } from "@mantine/core"

// Theme
// import { theme } from "@/app/theme"

// ========================================
// EXPERIENCE
// ========================================

export function Experience() {
	// Render
	return (
		<div id="experience" data-section>
			<Container fluid>
				<Stack justify="center" align="center">
					<Title>Experince</Title>
					<Space h="xl" />
					<Space h="xl" />
				</Stack>
			</Container>
		</div>
	)
}
