/* ================================================================
Description: Scroll wrapper, smooth scroll using LenisS
Author: Noah Huesman

Creation Date: 01/21/2025
Modification History:
#1 (01/21/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// Lenis
import Lenis from "lenis"

// React
import { useEffect } from "react"

// ========================================
//  SCROLL WRAPPER
// ========================================

export default function ScrollWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	useEffect(() => {
		// Initialize Lenis
		const lenis = new Lenis({
			lerp: 0.1, // Set your preferred lerp value (smoothness)
			smoothWheel: true, // Enable smooth scrolling for mouse wheel
		})

		// Animation frame loop for Lenis
		const raf = () => {
			requestAnimationFrame((time) => {
				lenis.raf(time)
				raf()
			})
		}
		requestAnimationFrame(raf)

		return () => {
			// Cleanup when component is unmounted
			lenis.destroy()
		}
	}, [])

	return <div>{children}</div>
}
