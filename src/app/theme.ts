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
import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core"

// ========================================
// THEME
// ========================================

// Theme override
const themeOverride = createTheme({
	// Primary color
	primaryColor: "accent-primary",
	primaryShade: 8,

	// Fonts
	fontFamily: "Poppins",
	headings: { fontFamily: "Poppins" },

	// Colors
	colors: {
		// Purple
		"accent-primary": [
			"#f9f0fd",
			"#ebdef0",
			"#d5bbdf",
			"#bd95cd",
			"#aa75be",
			"#9d61b5",
			"#9856b1",
			"#84479c",
			"#763e8c",
			"#67337b",
		],
	},
})

// ========================================
// EXPORTS
// ========================================

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
