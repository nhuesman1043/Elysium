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

// React scroll
import { Link } from "react-scroll"

// Theme
import { theme } from "@/app/theme"

// ========================================
// CALL TO ACTION
// ========================================

export function CallToAction() {
	// Render
	return (
		<Link to="about" smooth duration={1000} className="z-50">
			{/* Mobile */}
			<Button
				variant="transparent"
				rightSection={<IconArrowDown size={20} stroke={1.8} />}
				size="md"
				className={classes.button}
				c={theme.colors.textPrimary[0]}
				hiddenFrom="sm"
			>
				Learn more
			</Button>
			{/* Desktop */}
			<Button
				variant="transparent"
				rightSection={<IconArrowDown size={20} stroke={1.8} />}
				size="lg"
				className={classes.button}
				c={theme.colors.textPrimary[0]}
				visibleFrom="sm"
			>
				Learn more
			</Button>
		</Link>
	)
}
