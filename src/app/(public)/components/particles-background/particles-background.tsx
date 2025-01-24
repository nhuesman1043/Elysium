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

// React
import { useState, useEffect } from "react"

// Particles
import type { Container } from "@tsparticles/engine"
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

	// Particles loaded flag
	const particlesLoaded = async (container?: Container) => {
		if (container) console.log(container)
	}

	// Render
	return (
		<div className="relative size-full">
			{init && (
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={{
						fpsLimit: 120,
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
								speed: 1,
								straight: false,
							},
							number: {
								value: 150,
							},
							opacity: {
								value: { min: 0.25, max: 0.5 },
								animation: {
									enable: true,
									speed: 0.5,
									startValue: "random",
									sync: false,
								},
							},
							shape: {
								type: "circle",
							},
							size: {
								value: { min: 1, max: 5 },
							},
						},
						detectRetina: true,
						fullScreen: false,
					}}
					className="absolute left-0 top-0 z-0 size-full"
				/>
			)}
			<div className="relative z-10">{children}</div>
		</div>
	)
}
