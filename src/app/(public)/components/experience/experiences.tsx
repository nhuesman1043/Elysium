/* ================================================================
Description: Experiences
Author: Noah Huesman

Creation Date: 01/22/2025
Modification History:
#1 (01/22/2025) - Initial creation - Noah Huesman
#2 (01/31/2025) - Defined experiences - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./experiences.module.css"

// Shared components
import {
	Python,
	Mssql,
	React,
	Ignition,
	CSharp,
	Jenkins,
	Mongodb,
	GoogleCloud,
} from "@/components/shared"

// Mantine
import { Container, Space, Stack, Title, Grid, GridCol } from "@mantine/core"

// Theme
// import { theme } from "@/app/theme"

// Types library
import { Experience } from "@/library/types"

// ========================================
// EXPERIENCES
// ========================================

export function Experiences() {
	// Define experiences
	const experiences: Record<string, Experience> = {
		marvin: {
			company: "Marvin Windows and Doors",
			companyDescription: "",
			companyLink: "https://www.marvin.com/",
			position: "Systems Programming Intern",
			positionDescription:
				"Automated manufacturing processes using Ignition. Developed software tools for ",
			startDate: "May 2023",
			endDate: "January 2025",
			imagePath: "",
			techIcons: [
				<Ignition key="ignition" />,
				<Python key="python" />,
				<Mssql key="mssql" />,
				<React key="react" />,
				<CSharp key="csharp" />,
			],
		},
		signum: {
			company: "Signum",
			companyDescription: "",
			companyLink: "https://signumiot.com/",
			position: "Software Engineer Intern",
			positionDescription: "",
			startDate: "January 2025",
			endDate: "N/A",
			imagePath: "",
			techIcons: [
				<React key="react" />,
				<Jenkins key="jenkins" />,
				<Mongodb key="mongodb" />,
				<CSharp key="csharp" />,
				<GoogleCloud key="googleCloud" />,
			],
		},
	}

	// Map experiences into grid columns

	// Render
	return (
		<div id="experiences" data-section>
			<Container fluid>
				<Stack justify="center" align="center">
					<Title className={classes.title}>Experiences</Title>
					<Space visibleFrom="md" h="xl" />
					<Grid gutter={100} grow w="100%">
						{Object.entries(experiences).map(
							([key, experience]) => (
								<GridCol key={key}>
									<Title order={3}>
										{experience.company}
									</Title>
									<p>{experience.position}</p>
									<p>{experience.positionDescription}</p>
								</GridCol>
							)
						)}
					</Grid>

					<Space h="xl" />
				</Stack>
			</Container>
		</div>
	)
}
