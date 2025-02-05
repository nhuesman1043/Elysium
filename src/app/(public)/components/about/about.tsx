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
	Space,
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
					<Title className={classes.title}>About</Title>
					<Space visibleFrom="md" h={{ base: "xs", xl: "xl" }} />
					<Grid gutter={{ base: "lg", md: 100 }}>
						<GridCol span={{ base: 12, sm: 6, lg: 7 }}>
							<Text className={classes.text}>
								Driven by a passion for problem-solving and
								efficiency, I&apos;m a software engineer with
								expertise in automation, cloud development, and
								system optimization. I specialize in building
								high-impact solutions, from optimizing server
								performance and streamlining CI/CD pipelines to
								developing scalable applications. My experience
								spans hands-on development at Signum and Marvin,
								leading technical initiatives in student
								organizations, and driving innovation in my
								capstone project for Galois.
							</Text>
						</GridCol>
						<GridCol span={{ base: 12, sm: 6, lg: 5 }}>
							<Image
								component={NextImage}
								src="/images/about/headshot.jpg"
								alt="My headshot"
								width={5213}
								height={3822}
								className={classes.image}
							/>
						</GridCol>
					</Grid>
					<Space h="xl" />
				</Stack>
			</Container>
		</div>
	)
}
