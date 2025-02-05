/* ================================================================
Description: Projects
Author: Noah Huesman

Creation Date: 01/17/2025
Modification History:
#1 (01/17/2025) - Initial creation - Noah Huesman
#2 (01/30/2025) - Added projects - Noah Huesman
#3 (01/31/2025) - Refactored layout for mobile screens - Noah Huesman
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
	Authjs,
} from "@/components/shared"

// Mantine
import {
	Container,
	Stack,
	Title,
	Space,
	Center,
	Grid,
	GridCol,
	Group,
	Text,
	Divider,
	Image,
} from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

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
				"A repurposed Dell PC running Ubuntu, hosting a family Minecraft server and Keycloak via Docker.",
			imagePath: "/images/projects/atlas.png",
			techIcons: [
				<Ubuntu key="ubuntu" />,
				<Docker key="docker" />,
				<Keycloak key="keycloak" />,
			],
		},
		Spartan: {
			subtitle: "Web Application Template",
			description:
				"A fully configured web application template designed for building scalable full-stack applications.",
			imagePath: "/images/projects/spartan.png",
			techIcons: [
				<Nextjs key="nextjs" />,
				<Mongodb key="mongodb" />,
				<Prisma key="prisma" />,
				<Playwright key="playwright" />,
				<Authjs key="authjs" />,
				<GoogleCloud key="googleCloud" />,
				<Docker key="docker" />,
				<GithubActions key="githubActions" />,
			],
			liveDemoLink: "https://spartan.anovix-software.com",
		},
		Achlys: {
			subtitle: "Cemetery Management Solution",
			description:
				"Cemetery management software built for a church in Barnesville, Minnesota, streamlining record-keeping and administration.",
			imagePath: "/images/projects/achlys.png",
			techIcons: [
				<Nextjs key="nextjs" />,
				<Mongodb key="mongodb" />,
				<Prisma key="prisma" />,
				<Vitest key="vitest" />,
				<Playwright key="playwright" />,
				<GithubActions key="githubActions" />,
				<GoogleCloud key="googleCloud" />,
				<Docker key="docker" />,
				<Authjs key="authjs" />,
			],
		},
		Elysium: {
			subtitle: "Portfolio Website",
			description:
				"The portfolio you're viewing now, designed to showcase my experiences and projects.",
			imagePath: "/images/projects/elysium.png",
			techIcons: [
				<Nextjs key="nextjs" />,
				<Playwright key="playwright" />,
			],
			githubLink: "https://github.com/nhuesman1043/Elysium",
			liveDemoLink: "https://noah-huesman.dev",
		},
		Taurus: {
			subtitle: "NDSU Bison Motorsports Website",
			description:
				"The official website for NDSU Bison Motorsports, which I lead development of.",
			imagePath: "/images/projects/taurus.png",
			techIcons: [
				<Nextjs key="nextjs" />,
				<Playwright key="playwright" />,
			],
		},
	}

	// Map projects into grid columns
	const projectColumns = Object.keys(projects).map((project) => {
		// Render project grid columns
		return (
			<React.Fragment key={project}>
				<>
					<GridCol span={{ base: 0, xl: 1 }}></GridCol>
					<GridCol span={{ base: 12, xl: 5 }}>
						<Stack gap="md">
							<Text
								ta={{ base: "center", xl: "left" }}
								fw={700}
								size="30px"
								c={theme.colors.accentPrimary[0]}
							>
								{project}
							</Text>
							<Text
								ta={{ base: "center", xl: "left" }}
								fw={500}
								size="25px"
								c="dimmed"
							>
								{projects[project].subtitle}
							</Text>
							<Text
								ta={{ base: "center", xl: "left" }}
								className={classes.text}
							>
								{projects[project].description}
							</Text>
							<Center mt={{ base: "md", xl: "lg" }}>
								<Grid justify="center">
									{Array.from({ length: 14 }).map(
										(_, index) => (
											<GridCol
												key={index}
												miw={{
													base: 100,
													xl: 125,
												}}
												maw={{
													base: 100,
													xl: 125,
												}}
											>
												{
													projects[project].techIcons[
														index
													]
												}
											</GridCol>
										)
									)}
								</Grid>
							</Center>
						</Stack>
					</GridCol>
					<GridCol span={{ base: 12, xl: 5 }}>
						<Stack gap="xs" align="center">
							<Container fluid>
								<Image
									component={NextImage}
									src={projects[project].imagePath}
									alt={projects[project].description}
									width={5000}
									height={5000}
									className={classes.image}
								/>
							</Container>
							<Group justify="center" align="center">
								{projects[project].githubLink && (
									<TransitionLink
										href={projects[project].githubLink}
									>
										<Text
											className={classes.link}
											size="xl"
										>
											Repository
										</Text>
									</TransitionLink>
								)}
								{projects[project].liveDemoLink && (
									<TransitionLink
										href={projects[project].liveDemoLink}
									>
										<Text
											className={classes.link}
											size="xl"
										>
											Live Demo
										</Text>
									</TransitionLink>
								)}
							</Group>
						</Stack>
						<Divider mt="xl" hiddenFrom="xl" />
					</GridCol>
					<GridCol span={{ base: 0, xl: 1 }}></GridCol>
				</>
			</React.Fragment>
		)
	})

	// Render
	return (
		<div id="projects" data-section>
			<Container fluid>
				<Stack justify="center" align="center">
					<Title className={classes.title}>Projects</Title>
					<Space visibleFrom="md" h={{ base: "xs", xl: "xl" }} />
					<Container fluid>
						<Grid gutter={{ base: 10, md: 25, xl: 100 }}>
							{projectColumns}
						</Grid>
					</Container>
					<Space h="xl" />
				</Stack>
			</Container>
		</div>
	)
}
