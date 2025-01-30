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
import classes from "./about.module.css"

// Mantine
import {
	Container,
	Grid,
	GridCol,
	Stack,
	Title,
	Text,
	Image,
} from "@mantine/core"

// Next
import NextImage from "next/image"

// Theme
// import { theme } from "@/app/theme"

// ========================================
// ABOUT
// ========================================

export function About() {
	// Render
	return (
		<div id="about" data-section>
			<Container size="xl">
				<Stack justify="center" align="center">
					<Title>About</Title>
					<Grid gutter={{ base: "lg", md: 100 }}>
						<GridCol span={{ base: 12, sm: 6, md: 7 }}>
							<Text size="lg" className={classes.text}>
								Driven by a passion for problem-solving and
								efficiency, I&apos;m a software engineer with
								experience in automation, cloud development, and
								system optimization. I thrive on building
								high-impact solutions, whether it&apos;s
								optimizing server performance, streamlining
								CI/CD pipelines, or developing scalable
								applications. My work spans from hands-on
								development at Signum and Marvin to leading
								technical efforts in student organizations and
								my capstone project for Galois.
							</Text>
						</GridCol>
						<GridCol span={{ base: 12, sm: 6, md: 5 }}>
							<Image
								component={NextImage}
								src="/images/headshot.jpg"
								alt="My headshot"
								width={5000}
								height={5000}
								className={classes.image}
							/>
						</GridCol>
					</Grid>
				</Stack>
			</Container>
		</div>
	)
}
