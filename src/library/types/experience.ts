/* ================================================================
Description: Type for experience
Author: Noah Huesman

Creation Date: 01/30/2025
Modification History:
#1 (01/30/2025) - Initial creation - Noah Huesman
================================================================ */

// =========================================
// IMPORTS
// =========================================

// React
import { JSX } from "react"

// ========================================
// EXPERIENCE
// ========================================

export type Experience = {
	company: string
	companyLink: string
	position: string
	positionDescription: string
	startDate: string
	endDate: string
	techIcons: JSX.Element[]
}
