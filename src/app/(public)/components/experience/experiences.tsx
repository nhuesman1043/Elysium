/* ================================================================
Description: Experiences
Author: Noah Huesman

Creation Date: 01/22/2025
Modification History:
#1 (01/22/2025) - Initial creation - Noah Huesman
#2 (01/31/2025) - Defined experiences - Noah Huesman
#3 (02/01/2025) - Mapped experiences into grid columns - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./experiences.module.css"

// Shared components
import {
	TransitionLink,
	Python,
	Mssql,
	React as ReactIcon,
	Ignition,
	CSharp,
	Jenkins,
	Mongodb,
	GoogleCloud,
} from "@/components/shared"

// Mantine
import {
	Container,
	Space,
	Stack,
	Title,
	Text,
	Grid,
	GridCol,
} from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

// Types library
import { Experience } from "@/library/types"

// React
import React from "react"

// ========================================
// EXPERIENCES
// ========================================

export function Experiences() {
	// Define experiences
	const experiences: Record<string, Experience> = {
		marvin: {
			company: "Marvin Windows and Doors",
			companyLink: "https://www.marvin.com/",
			position: "Systems Programming Intern",
			positionDescription:
				"Automated manufacturing processes using Ignition. Developed software tools for ",
			startDate: "May 2023",
			endDate: "January 2025",
			techIcons: [
				<Ignition key="ignition" />,
				<Python key="python" />,
				<Mssql key="mssql" />,
				<ReactIcon key="react" />,
				<CSharp key="csharp" />,
			],
		},
		signum: {
			company: "Signum",
			companyLink: "https://signumiot.com/",
			position: "Software Engineer Intern",
			positionDescription: "",
			startDate: "January 2025",
			endDate: "N/A",
			techIcons: [
				<ReactIcon key="react" />,
				<Jenkins key="jenkins" />,
				<Mongodb key="mongodb" />,
				<CSharp key="csharp" />,
				<GoogleCloud key="googleCloud" />,
				<Python key="python" />,
			],
		},
	}

	// Map experiences into grid columns
	const experienceColumns = Object.keys(experiences).map((experience) => {
		// Render experience grid columns
		return (
			<React.Fragment key={experience}>
				<>
					<GridCol span={{ base: 0, md: 1 }}></GridCol>
					<GridCol span={{ base: 12, md: 5 }}>
						<Stack gap="md">
							<TransitionLink
								href={experiences[experience].companyLink}
							>
								<Text
									ta={{ base: "center", md: "left" }}
									fw={700}
									size="30px"
									c={theme.colors.accentPrimary[0]}
								>
									{experiences[experience].company}
								</Text>
							</TransitionLink>
							<Text
								ta={{ base: "center", md: "left" }}
								fw={500}
								size="25px"
								c="dimmed"
							>
								{experiences[experience].position}
							</Text>
							<Text
								ta={{ base: "center", md: "left" }}
								size="20px"
							>
								{experiences[experience].startDate} -{" "}
								{experiences[experience].endDate}
							</Text>
							<Text
								ta={{ base: "center", md: "left" }}
								size="20px"
							>
								{experiences[experience].positionDescription}
							</Text>
						</Stack>
					</GridCol>
					<GridCol span={{ base: 12, md: 5 }}>
						<Grid mb="lg" mt="lg">
							{Array.from({ length: 12 }).map((_, index) => (
								<GridCol
									span={{ base: 4, md: 2 }}
									key={index}
									w={{ base: 25, md: 50 }}
								>
									{experiences[experience].techIcons[index]}
								</GridCol>
							))}
						</Grid>
					</GridCol>
					<GridCol span={{ base: 0, md: 1 }}></GridCol>
				</>
			</React.Fragment>
		)
	})

	// Render
	return (
		<div id="experiences" data-section>
			<Container fluid>
				<Stack justify="center" align="center">
					<Title className={classes.title}>Experiences</Title>
					<Space visibleFrom="md" h="xl" />
					<Container fluid>
						<Grid gutter={{ base: 10, md: 100 }}>
							{experienceColumns}
						</Grid>
					</Container>
					<Space h="xl" />
				</Stack>
			</Container>
		</div>
	)
}
