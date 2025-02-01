/* ================================================================
Description: Type for projects
Author: Noah Huesman

Creation Date: 01/29/2025
Modification History:
#1 (01/29/2025) - Initial creation - Noah Huesman
================================================================ */

// =========================================
// IMPORTS
// =========================================

// React
import { JSX } from "react"

// ========================================
// PROJECT
// ========================================

export type Project = {
	subtitle: string
	description: string
	imagePath: string
	githubLink?: string
	liveDemoLink?: string
	techIcons: JSX.Element[]
}
