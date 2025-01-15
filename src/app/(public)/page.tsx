/* ================================================================
Description: Public page
Author: Noah Huesman

Creation Date: 01/14/2025
Modification History:
#1 (01/14/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import { Hero } from "./components"

// Mantine
import { Container, darken } from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

// ========================================
// PUBLIC PAGE
// ========================================

export default function PublicPage() {
	// Render
	return (
		<Container
			fluid
			bg={darken(theme.colors.backgroundPrimary[0], 0.25)}
			c={theme.colors.textPrimary[0]}
		>
			<Hero />
		</Container>
	)
}
