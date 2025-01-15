/* ================================================================
Description: Hero
Author: Noah Huesman

Creation Date: 01/14/2025
Modification History:
#1 (01/14/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./hero.module.css"

// Components
import { TopWave } from "./top-wave"
import { CallToAction } from "./call-to-action"
import { BottomWave } from "./bottom-wave"

// Mantine
import { Container, Center, Stack, Title } from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

// Chroma
import chroma from "chroma-js"

// ========================================
// HERO
// ========================================

export function Hero() {
	// Generate an 8-step gradient for each wave based on theme colors
	// Top wave gradient
	const topWaveGradient = chroma
		.scale([theme.colors.accentPrimary[0], theme.colors.accentSecondary[0]])
		.colors(8)

	// Bottom wave gradient
	const bottomWaveGradient = chroma
		.scale([theme.colors.accentPrimary[0], theme.colors.accentSecondary[0]])
		.colors(8)

	// Render
	return (
		<Container id="hero" fluid>
			<div className="absolute left-0 top-0 z-0 h-screen w-screen">
				<TopWave colors={topWaveGradient} />
			</div>
			<Center className="h-screen">
				<Stack>
					{/* Mobile */}
					<Stack hiddenFrom="sm">
						<Title order={2} size={25}>
							Hi, I&apos;m Noah Huesman.
						</Title>
						<Title order={3} size={15}>
							Welcome to my portfolio.
						</Title>
					</Stack>
					{/* Desktop */}
					<Stack visibleFrom="sm">
						<Title order={1} size={35}>
							Hi, I&apos;m Noah Huesman.
						</Title>
						<Title order={2} size={25}>
							Welcome to my portfolio.
						</Title>
					</Stack>
					<CallToAction />
				</Stack>
			</Center>
			<div className="absolute bottom-0 left-0 z-0 h-screen w-screen">
				<BottomWave colors={bottomWaveGradient} />
			</div>
		</Container>
	)
}
