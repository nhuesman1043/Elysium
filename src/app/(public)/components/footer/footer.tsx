/* ================================================================
Description: Footer
Author: Noah Huesman

Creation Date: 01/25/2025
Modification History:
#1 (01/25/2025) - Initial creation - Noah Huesman
#2 (01/28/2025) - Added social media links - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./footer.module.css"

// Shared components
import { TransitionLink } from "@/components/shared"

// Mantine
import {
	Container,
	Group,
	HoverCard,
	HoverCardTarget,
	HoverCardDropdown,
} from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

// Tabler icons
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"

// Types library
import { SocialMedia } from "@/library/types"

// ========================================
// FOOTER
// ========================================

export function Footer() {
	// Define social media and their attributes
	const socialMedia: Record<string, SocialMedia> = {
		linkedin: {
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/noah-huesman-6272121bb/",
			icon: <IconBrandLinkedin stroke={1.1} size={35} />,
		},
		github: {
			title: "GitHub",
			link: "https://github.com/nhuesman1043?tab=repositories",
			icon: <IconBrandGithub stroke={1.1} size={35} />,
		},
	}

	// Render
	return (
		<div id="footer" className="z-50">
			<Container fluid bg={theme.colors.backgroundPrimary[0]} h={70}>
				<Group justify="center" h="100%" gap="lg">
					{Object.values(socialMedia).map((medium: SocialMedia) => {
						return (
							<HoverCard
								withArrow
								arrowPosition="center"
								arrowSize={10}
								closeDelay={-100}
								key={medium.title}
							>
								<HoverCardTarget>
									<TransitionLink href={medium.link}>
										{medium.icon}
									</TransitionLink>
								</HoverCardTarget>
								<HoverCardDropdown>
									{medium.title}
								</HoverCardDropdown>
							</HoverCard>
						)
					})}
				</Group>
			</Container>
		</div>
	)
}
