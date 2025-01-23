/* ================================================================
Description: Header link
Author: Noah Huesman

Creation Date: 01/17/2025
Modification History:
#1 (01/17/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./link.module.css"

// Mantine
import { Text } from "@mantine/core"

// Hooks library
import { useScroll } from "@/library/hooks"

// ========================================
// LINK
// ========================================

export function Link({ name, id }: { name: string; id: string }) {
	// Scroll hook
	const { activeSection, scrollToId } = useScroll()

	// Determine if the link is active
	const isActive = activeSection === id

	// Render
	return (
		<div
			onClick={() => scrollToId(id)}
			className={`${classes.link} ${isActive ? classes.active : ""}`}
		>
			{/* Mobile */}
			<Text size="md" hiddenFrom="sm">
				{name}
			</Text>
			{/* Desktop */}
			<Text size="xl" visibleFrom="sm">
				{name}
			</Text>
		</div>
	)
}
