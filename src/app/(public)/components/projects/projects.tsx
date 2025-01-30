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

// Shared components
import { Nextjs, Mongodb } from "@/components/shared"

// Mantine
import { Container, Space, Group, Stack, Title } from "@mantine/core"

// Theme
// import { theme } from "@/app/theme"

// Types library
// import { Project } from "@/library/types"

// ========================================
// PROJECTS
// ========================================

export function Projects() {
	// Define projects
	// const projects: Record<string, Project> = {
	// 	atlas: {
	// 		description:
	// 			"Atlas is a Minecraft server that I host and manage. It is a modded server that runs on Fabric.",
	// 		tech: [],
	// 	},
	// 	spartan: {
	// 		description:
	// 			"Spartan is a web application that I built for a client. It is a full-stack application that uses Next.js and MongoDB.",
	// 		tech: [<Nextjs key="nextjs" />],
	// 		githubLink: "https://github.com/ANOVIX-Software/Spartan",
	// 	},
	// 	achlys: {
	// 		description:
	// 			"Achlys is a web application that I built for a client.",
	// 		tech: [<Nextjs key="nextjs" />],
	// 	},
	// 	elysium: {
	// 		description:
	// 			"Elysium is a web application that I built for a client.",
	// 		tech: [<Nextjs key="nextjs" />],
	// 		githubLink: "https://github.com/nhuesman1043/Elysium",
	// 	},
	// }

	//

	// Render
	return (
		<div
			id="projects"
			data-section
			className="h-screen border-2 border-orange-600"
		>
			<Container fluid className="border-2 border-cyan-600">
				<Stack justify="center" align="center">
					<Title>Projects</Title>
				</Stack>
				<Space h="sm" />
				<Group
					className="border-2 border-lime-600"
					align="center"
					justify="center"
				>
					<Nextjs />
					<Mongodb />
				</Group>
				<Space h="sm" />
			</Container>
		</div>
	)
}
