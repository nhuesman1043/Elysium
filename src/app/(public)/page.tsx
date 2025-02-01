/* ================================================================
Description: Public page
Author: Noah Huesman

Creation Date: 01/14/2025
Modification History:
#1 (01/14/2025) - Initial creation - Noah Huesman
#2 (01/22/2025) - Added components - Noah Huesman
#3 (01/24/2025) - Added particles background - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Components
import {
	Hero,
	ParticlesBackground,
	Header,
	About,
	Experiences,
	Projects,
	Contact,
	Footer,
} from "./components"

// Mantine
import { Stack } from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

// ========================================
// PUBLIC PAGE
// ========================================

export default function PublicPage() {
	// Render
	return (
		<Stack
			bg={theme.colors.backgroundSecondary[0]}
			c={theme.colors.textPrimary[0]}
			gap={0}
		>
			<Hero />
			<ParticlesBackground>
				<Stack gap="xl">
					<Header />
					<About />
					<Experiences />
					<Projects />
					<Contact />
					<Footer />
				</Stack>
			</ParticlesBackground>
		</Stack>
	)
}
