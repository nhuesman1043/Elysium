/* ================================================================
Description: Header
Author: Noah Huesman

Creation Date: 01/16/2025
Modification History:
#1 (01/16/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./header.module.css"

// Components
import { Link } from "./link"

// Mantine
import { Container, Group } from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

// ========================================
// HEADER
// ========================================

export function Header() {
	// Define links
	const links = [
		{ name: "About", id: "about" },
		{ name: "Experiences", id: "experiences" },
		{ name: "Projects", id: "projects" },
		{ name: "Contact", id: "contact" },
	]

	// Render
	return (
		<div id="header" className="sticky top-0 z-50">
			<Container
				fluid
				bg={theme.colors.backgroundPrimary[0]}
				h={70}
				className={classes.header}
			>
				{/* Mobile */}
				<Group justify="center" px="sm" h="100%" hiddenFrom="sm">
					{links.map((link, index) => (
						<Link key={index} name={link.name} id={link.id} />
					))}
				</Group>
				{/* Desktop */}
				<Group justify="flex-end" px="lg" h="100%" visibleFrom="sm">
					{links.map((link, index) => (
						<Link key={index} name={link.name} id={link.id} />
					))}
				</Group>
			</Container>
		</div>
	)
}
