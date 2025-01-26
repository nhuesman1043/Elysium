/* ================================================================
Description: Footer
Author: Noah Huesman

Creation Date: 01/25/2025
Modification History:
#1 (01/25/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./footer.module.css"

// Components

// Mantine
import { Container } from "@mantine/core"

// Theme
// import { theme } from "@/app/theme"

// ========================================
// FOOTER
// ========================================

export function Footer() {
	// Render
	return (
		<div id="footer" className="z-50">
			<Container fluid className="border-2 border-purple-600">
				footer
			</Container>
		</div>
	)
}
