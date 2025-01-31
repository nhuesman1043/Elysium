/* ================================================================
Description: Projects
Author: Noah Huesman

Creation Date: 01/17/2025
Modification History:
#1 (01/17/2025) - Initial creation - Noah Huesman
#2 (01/30/2025) - Added projects - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./projects.module.css"

// Shared components
import {
	TransitionLink,
	Nextjs,
	Mongodb,
	Docker,
	Prisma,
	Keycloak,
	Ubuntu,
	Vitest,
	Playwright,
	GithubActions,
	GoogleCloud,
} from "@/components/shared"

// Mantine
import {
	Container,
	Stack,
	Title,
	Space,
	Grid,
	GridCol,
	Group,
	Text,
	Image,
} from "@mantine/core"

// Theme
// import { theme } from "@/app/theme"

// Types library
import { Project } from "@/library/types"

// React
import React from "react"

// Next
import NextImage from "next/image"

// ========================================
// PROJECTS
// ========================================

export function Projects() {
	// Define projects
	const projects: Record<string, Project> = {
		Atlas: {
			subtitle: "Home Ubuntu Server",
			description:
				"An old dell PC turned Ubuntu server that I use to host my family Minecraft server and Keycloak instances via Docker.",
			imagePath: "/images/projects/image.png",
			techIcons: [
				<Ubuntu key="ubuntu" />,
				<Docker key="docker" />,
				<Keycloak key="keycloak" />,
			],
		},
		Spartan: {
			subtitle: "Web Application Template",
			description: "A web application template configured ",
			imagePath: "/images/projects/image.png",
			techIcons: [
				<Nextjs key="nextjs" />,
				<Mongodb key="mongodb" />,
				<Prisma key="prisma" />,
				<Playwright key="playwright" />,
			],
			githubLink: "https://github.com/ANOVIX-Software/Spartan",
		},
		Achlys: {
			subtitle: "Cemetery Management Solution",
			description:
				"Cemetery management software for a church in my hometown of Barnesville, Minnesota.",
			imagePath: "/images/projects/image.png",
			techIcons: [
				<Nextjs key="nextjs" />,
				<Mongodb key="mongodb" />,
				<Prisma key="prisma" />,
				<Vitest key="vitest" />,
				<Playwright key="playwright" />,
				<GithubActions key="githubActions" />,
				<GoogleCloud key="googleCloud" />,
			],
		},
		Elysium: {
			subtitle: "Portfolio Website",
			description: "This portfolio that you are looking at right now.",
			imagePath: "/images/projects/image.png",
			techIcons: [
				<Nextjs key="nextjs" />,
				<Playwright key="playwright" />,
			],
			githubLink: "https://github.com/nhuesman1043/Elysium",
		},
		Taurus: {
			subtitle: "NDSU Bison Motorsports",
			description:
				"NDSU Bison Motorsport's website that I led the development of.",
			imagePath: "/images/projects/image.png",
			techIcons: [
				<Nextjs key="nextjs" />,
				<Playwright key="playwright" />,
			],
		},
	}

	// Map projects into alternating grid columns
	const projectColumns = Object.keys(projects).map((project, index) => {
		// Get project details
		const {
			subtitle,
			description,
			imagePath,
			techIcons,
			githubLink,
			liveDemoLink,
		} = projects[project]

		// Check if index is even or odd
		const isEven = index % 2 === 0

		// Render alternating grid columns
		return (
			<React.Fragment key={project}>
				{isEven ? (
					<>
						<GridCol span={6} className="border-2 border-lime-600">
							<Stack justify="center" h="100%">
								<Group justify="space-between" grow>
									<div className="border-2 border-red-600">
										<Container size="xl">
											<Grid>
												{techIcons.map(
													(icon, index) => (
														<GridCol
															key={index}
															span={4}
														>
															{icon}
														</GridCol>
													)
												)}
											</Grid>
										</Container>
									</div>
									<div>
										<Stack gap="xs">
											<Title ta="right" fw={700}>
												{project}
											</Title>
											<Text ta="right" size="xl">
												{subtitle}
											</Text>
											<Text ta="right">
												{description}
											</Text>
										</Stack>
									</div>
								</Group>
							</Stack>
						</GridCol>
						<GridCol span={6} className="border-2 border-lime-600">
							<Stack>
								<Container fluid mb="lg">
									<Image
										component={NextImage}
										src={imagePath}
										alt={description}
										width={5000}
										height={5000}
										className={classes.image}
									/>
								</Container>
								<Group justify="center" align="center">
									{githubLink ? (
										<TransitionLink href={githubLink}>
											<Text
												className={classes.link}
												size="xl"
											>
												Project GitHub
											</Text>
										</TransitionLink>
									) : null}
									{liveDemoLink ? (
										<TransitionLink href={liveDemoLink}>
											<Text className={classes.link}>
												Live Demo
											</Text>
										</TransitionLink>
									) : null}
								</Group>
							</Stack>
						</GridCol>
					</>
				) : (
					<>
						<GridCol span={6} className="border-2 border-lime-600">
							<Stack>
								<Container fluid mb="lg">
									<Image
										component={NextImage}
										src={imagePath}
										alt={description}
										width={5000}
										height={5000}
										className={classes.image}
									/>
								</Container>
								<Group justify="center" align="center">
									{githubLink ? (
										<TransitionLink href={githubLink}>
											<Text
												className={classes.link}
												size="xl"
											>
												Project GitHub
											</Text>
										</TransitionLink>
									) : null}
									{liveDemoLink ? (
										<TransitionLink href={liveDemoLink}>
											<Text className={classes.link}>
												Live Demo
											</Text>
										</TransitionLink>
									) : null}
								</Group>
							</Stack>
						</GridCol>
						<GridCol span={6} className="border-2 border-lime-600">
							<Stack justify="center" h="100%">
								<Group justify="space-between" grow>
									<div>
										<Stack gap="xs">
											<Title ta="left" fw={700}>
												{project}
											</Title>
											<Text ta="left" size="xl">
												{subtitle}
											</Text>
											<Text ta="left">{description}</Text>
										</Stack>
									</div>
									<div className="border-2 border-red-600">
										<Container size="xl">
											<Grid>
												{techIcons.map(
													(icon, index) => (
														<GridCol
															key={index}
															span={4}
														>
															{icon}
														</GridCol>
													)
												)}
											</Grid>
										</Container>
									</div>
								</Group>
							</Stack>
						</GridCol>
					</>
				)}
			</React.Fragment>
		)
	})

	// Render
	return (
		<div id="projects" data-section>
			<Container fluid>
				<Stack justify="center" align="center">
					<Title>Projects</Title>
					<Space h="xl" />
					<Grid gutter={100} grow w="100%">
						{projectColumns}
					</Grid>
					<Space h="xl" />
				</Stack>
			</Container>
		</div>
	)
}
