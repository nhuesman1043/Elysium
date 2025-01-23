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
	// Ref to store Lenis instance
	const lenisRef = useRef<Lenis | null>(null)

	// State to track the active section
	const [activeSection, setActiveSection] = useState<string>("")

	// Effect to initialize Lenis
	useEffect(() => {
		// Initialize Lenis
		const lenis = new Lenis({
			lerp: 0.1,
			smoothWheel: true,
			syncTouch: true,
		})

		// Store the instance in the ref
		lenisRef.current = lenis

		// Animation frame loop for Lenis
		const raf = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

		return () => {
			// Cleanup when component is unmounted
			lenis.destroy()
		}
	}, [])

	// Effect to track active section
	useEffect(() => {
		// Track active section using IntersectionObserver
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id)
				})
			},
			{ threshold: 0.1 }
		)

		// Observe all sections with an ID
		const sections = document.querySelectorAll("[data-section]")
		sections.forEach((section) => observer.observe(section))

		return () => {
			// Cleanup observer
			observer.disconnect()
		}
	}, [])

	// Scroll to an element by id
	const scrollToId = (id: string) => {
		// Check if Lenis instance is initialized
		if (lenisRef.current) {
			// Get the target element by id
			const targetElement = document.getElementById(id)

			// Scroll to the target element if it exists
			if (targetElement) {
				lenisRef.current.scrollTo(targetElement, {
					offset: -70, // Header offset
					duration: 1,
					easing: (t) => t,
				})
			}
		}
	}

	return { activeSection, scrollToId }
}
