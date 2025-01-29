/* ================================================================
Description: Type for social media
Author: Noah Huesman

Creation Date: 01/29/2025
Modification History:
#1 (01/29/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// React
import { JSX } from "react"

// ========================================
// SOCIAL MEDIA
// ========================================

export type SocialMedia = {
	title: string
	link: string
	icon: JSX.Element
}
