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
// import classes from "./header-link.module.css"

// Mantine
import { Anchor, Text } from "@mantine/core"

// ========================================
// HEADER LINK
// ========================================

export function HeaderLink({ name, id }: { name: string; id: string }) {
	// Render
	return (
		<Anchor href={id}>
			{/* Mobile */}
			<Text size="md" hiddenFrom="sm">
				{name}
			</Text>
			{/* Desktop */}
			<Text size="xl" visibleFrom="sm">
				{name}
			</Text>
		</Anchor>
	)
}
