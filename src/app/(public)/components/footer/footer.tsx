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

// Mantine
import {
	Container,
	Group,
	HoverCard,
	HoverCardTarget,
	HoverCardDropdown,
	Text,
} from "@mantine/core"

// Theme
import { theme } from "@/app/theme"

// Tabler icons
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"

// Types library
import { SocialMedia } from "@/library/types"

// Next
import Link from "next/link"

// ========================================
// FOOTER
// ========================================

export function Footer() {
	// Define social media and their attributes
	const socialMedia: Record<string, SocialMedia> = {
		linkedin: {
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/noah-huesman-6272121bb/",
			icon: <IconBrandLinkedin stroke={1.1} size={35} />,
		},
		github: {
			title: "My GitHub",
			link: "https://github.com/nhuesman1043?tab=repositories",
			icon: <IconBrandGithub stroke={1.1} size={35} />,
		},
	}

	// Render
	return (
		<div id="footer" className="z-50">
			<Container fluid bg={theme.colors.backgroundPrimary[0]} h={70}>
				<Group justify="center" h="100%" gap="xl">
					{Object.values(socialMedia).map((medium: SocialMedia) => {
						return (
							<HoverCard
								withArrow
								arrowPosition="center"
								arrowSize={10}
								key={medium.title}
							>
								<HoverCardTarget>
									<Link href={medium.link}>
										{medium.icon}
									</Link>
								</HoverCardTarget>
								<HoverCardDropdown>
									<Text>{medium.title}</Text>
								</HoverCardDropdown>
							</HoverCard>
						)
					})}
				</Group>
			</Container>
		</div>
	)
}
