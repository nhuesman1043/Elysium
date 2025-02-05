/* ================================================================
Description: Particles background using tsparticles
Author: Noah Huesman

Creation Date: 01/23/2025
Modification History:
#1 (01/23/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./particles-background.module.css"

// Mantine
import { useMediaQuery } from "@mantine/hooks"

// React
import { useState, useEffect } from "react"

// Particles
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

// Theme
import { theme } from "@/app/theme"

// ========================================
// PARTICLES BACKGROUND
// ========================================

export function ParticlesBackground({
	children,
}: {
	children: React.ReactNode
}) {
	// Determine if mobile
	const isMobile = useMediaQuery("(max-width: 62em)")

	// Initialization state
	const [init, setInit] = useState(false)

	// Load particles engine on component mount
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// Load slim particles
			await loadSlim(engine)
		}).then(() => {
			// Set initialization state
			setInit(true)
		})
	}, [])

	// Render
	return (
		<div className="relative size-full">
			{init && (
				<Particles
					id="tsparticles"
					options={{
						fpsLimit: isMobile ? 30 : 60,
						particles: {
							color: {
								value: theme.colors.accentPrimary[0],
							},
							move: {
								direction: "top",
								enable: true,
								outModes: {
									default: "out",
								},
								random: false,
								speed: 0.5,
								straight: true,
							},
							number: {
								value: isMobile ? 50 : 100,
							},
							opacity: {
								value: 0.4,
							},
							shape: {
								type: "circle",
							},
							size: {
								value: { min: 1, max: 5 },
							},
							interactivity: {
								events: {
									onHover: {
										enable: false,
									},
									onClick: {
										enable: false,
									},
								},
							},
						},
						detectRetina: false,
						fullScreen: false,
					}}
					className="absolute left-0 top-0 z-0 size-full"
				/>
			)}
			<div className="relative z-10">{children}</div>
		</div>
	)
}
