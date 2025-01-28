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
	Center,
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
				<Center>
					<Stack justify="center" align="center">
						<Title>About</Title>
						<Grid gutter={{ base: "lg", md: 100 }}>
							<GridCol span={{ base: 12, sm: 6, md: 7 }}>
								<Text className={classes.text}>
									A clear example of a technological
									innovation where an analysis based on
									Rawls&apos; veil of ignorance exposes both
									benefits and harms is the widespread
									adoption of automation and artificial
									intelligence (AI) in the workforce. If we
									examine this innovation behind the veil of
									ignorance, we must imagine ourselves not
									knowing whether we are a highly skilled
									professional, a low-skilled laborer, or
									someone lacking the education or resources
									to adapt to the changing job market. From
									this impartial standpoint, it becomes clear
									that while automation can bring significant
									benefits, it also disproportionately harms
									certain groups in society. On the one hand,
									automation and AI can greatly benefit
									high-skilled workers in sectors like
									technology, software development, and AI
									management, where increased efficiency and
									productivity can lead to new job
									opportunities and higher wages. The use of
									AI in industries like healthcare or finance
									can also lead to better services, reduced
									costs, and innovation, contributing to
									overall societal progress.
								</Text>
							</GridCol>
							<GridCol span={{ base: 12, sm: 6, md: 5 }}>
								<Image
									component={NextImage}
									src="/images/headshot.jpg"
									alt="Noah Huesman"
									width={5000}
									height={5000}
									className={classes.image}
								/>
							</GridCol>
						</Grid>
					</Stack>
				</Center>
			</Container>
		</div>
	)
}
