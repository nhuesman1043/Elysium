/* ================================================================
Description: Mantine theme configuration
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Mantine
import {
	createTheme,
	DEFAULT_THEME,
	mergeMantineTheme,
	colorsTuple,
} from "@mantine/core"

// ========================================
// THEME
// ========================================

// Theme override
const themeOverride = createTheme({
	// Primary color
	primaryColor: "accentPrimary",
	primaryShade: 0,

	// Fonts
	fontFamily: "Poppins",
	headings: { fontFamily: "Poppins" },

	// Colors
	colors: {
		// Lapis lazuli
		accentPrimary: colorsTuple("#22577A"),

		// Keppel
		accentSecondary: colorsTuple("#3BA99C"),

		// Gray
		backgroundPrimary: colorsTuple("#18191A"),

		// Dark gray
		backgroundSecondary: colorsTuple("#222123"),

		// White
		textPrimary: colorsTuple("#F8F8F2"),
	},
})

// ========================================
// EXPORTS
// ========================================

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
