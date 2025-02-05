/* ================================================================
Description: Scroll hook for smooth scrolling using Lenis
Author: Noah Huesman

Creation Date: 01/22/2025
Modification History:
#1 (01/22/2025) - Initial creation - Noah Huesman
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
import { useState, useEffect, useRef } from "react"

// ========================================
// USE SCROLL
// ========================================

export const useScroll = () => {
	// Initialize Lenis and active section
	const lenisRef = useRef<Lenis | null>(null)
	const [activeSection, setActiveSection] = useState<string>("")

	useEffect(() => {
		// Initialize Lenis
		const lenis = new Lenis({
			autoRaf: true,
			smoothWheel: true,
			syncTouch: true,
			touchMultiplier: 0.9,
			wheelMultiplier: 1,
			lerp: 0.1,
			anchors: true,
		})

		// Save Lenis instance to ref
		lenisRef.current = lenis

		// Listen to scroll events
		lenis.on("scroll", () => {
			const sections = document.querySelectorAll("[data-section]")
			sections.forEach((section) => {
				if (
					section.getBoundingClientRect().top <
					window.innerHeight * 0.4
				)
					setActiveSection(section.id)
			})
		})

		// Destroy Lenis on unmount
		return () => {
			lenis.destroy()
		}
	}, [])

	// Smooth scrolling to an element by id
	const scrollToId = (id: string) => {
		if (lenisRef.current) {
			const targetElement = document.getElementById(id)
			if (targetElement) {
				lenisRef.current.scrollTo(targetElement, {
					offset: -80,
					duration: 2,
				})
			}
		}
	}

	// Return active section and scroll function
	return { activeSection, scrollToId }
}
