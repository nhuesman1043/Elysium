/* ================================================================
Description: Bottom wave component for the hero section
Author: Noah Huesman

Creation Date: 01/14/2025
Modification History:
#1 (01/14/2025) - Initial creation - Noah Huesman
#2 (01/16/2025) - GSAP integration - Noah Huesman
#3 (01/20/2025) - Fade-in effect added - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./bottom-wave.module.css"

// Wave paths
import wavePaths from "../wave-paths.json"

// React
import React, { useEffect, useRef } from "react"

// GSAP
import { gsap } from "gsap"

// ========================================
// BOTTOM WAVE
// ========================================

export function BottomWave({ colors }: { colors: string[] }) {
	// Path references
	const waveRefs = useRef<(SVGPathElement | null)[]>(
		new Array(Object.values(wavePaths.bottomWaves).length).fill(null)
	)

	// Animation references for cleanup
	const waveAnimations = useRef<gsap.core.Timeline[]>([])

	// Wave animation
	useEffect(() => {
		// Clear any existing animations before starting new ones
		waveAnimations.current.forEach((animation) => animation.kill())
		waveAnimations.current = []

		// Loop through each bottom wave
		Object.values(wavePaths.bottomWaves).forEach((paths, index) => {
			// Get the current wave element
			const waveElement = waveRefs.current[index]

			// Animate the wave if it exists
			if (waveElement) {
				// Initialize GSAP animation timeline for this wave
				const waveAnimation = gsap.timeline({
					repeat: -1,
					repeatDelay: 0,
				})

				// Loop through each path array in the bottom wave and animate between the paths for this wave
				paths.forEach((path, pathIndex) => {
					const nextPath = paths[(pathIndex + 1) % paths.length]
					waveAnimation.to(waveElement, {
						duration: 6,
						attr: { d: nextPath },
						ease: "power1.inOut",
					})
				})

				// Store the animation for cleanup
				waveAnimations.current.push(waveAnimation)
			}
		})

		// Cleanup animations on component unmount
		return () => {
			waveAnimations.current.forEach((animation) => animation.kill())
		}
	}, [])

	// Render
	return (
		<svg
			viewBox="0 0 900 600"
			preserveAspectRatio="none"
			className="size-full"
		>
			{/* Loop through each bottom wave and draw the initial path - Index 0 */}
			{Object.values(wavePaths.bottomWaves).map((paths, index) => (
				<path
					key={index}
					ref={(element) => {
						waveRefs.current[index] = element
					}}
					d={paths[0]}
					fill={colors[index]}
				></path>
			))}
		</svg>
	)
}
