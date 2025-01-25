/* ================================================================
Description: Projects
Author: Noah Huesman

Creation Date: 01/17/2025
Modification History:
#1 (01/17/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./projects.module.css"

// Components

// Mantine
import { Container } from "@mantine/core"

// Theme
//import { theme } from "@/app/theme"

// ========================================
// PROJECTS
// ========================================

export function Projects() {
	// Render
	return (
		<div
			id="projects"
			data-section
			className="h-screen border-2 border-orange-600"
		>
			<Container fluid className="border-2 border-cyan-600">
				projects
			</Container>
		</div>
	)
}
