/* ================================================================
Description: Call to action button for the hero section
Author: Noah Huesman

Creation Date: 01/14/2025
Modification History:
#1 (01/14/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./call-to-action.module.css"

// Mantine
import { Button } from "@mantine/core"

// Tabler icons
import { IconArrowDown } from "@tabler/icons-react"

// Theme
import { theme } from "@/app/theme"

// Hooks library
import { useScroll } from "@/library/hooks"

// ========================================
// CALL TO ACTION
// ========================================

export function CallToAction() {
	// Scroll hook
	const { scrollToId } = useScroll()

	// Button props shared by both buttons
	const buttonProps = {
		variant: "transparent",
		rightSection: <IconArrowDown size={20} stroke={1.8} />,
		className: classes.button,
		c: theme.colors.textPrimary[0],
		onClick: () => {
			scrollToId("about")
		},
	}

	// Render
	return (
		<div className="z-50">
			{/* Mobile */}
			<Button {...buttonProps} size="md" hiddenFrom="sm">
				Learn more
			</Button>
			{/* Desktop */}
			<Button {...buttonProps} size="lg" visibleFrom="sm">
				Learn more
			</Button>
		</div>
	)
}
