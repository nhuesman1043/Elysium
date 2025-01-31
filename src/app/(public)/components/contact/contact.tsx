/* ================================================================
Description: Contact
Author: Noah Huesman

Creation Date: 01/17/2025
Modification History:
#1 (01/17/2025) - Initial creation - Noah Huesman
#2 (01/25/2025) - Built out contact form - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// CSS
// import classes from "./contact.module.css"

// Mantine
import {
	Center,
	Container,
	Stack,
	Title,
	Text,
	Group,
	Paper,
	TextInput,
	Textarea,
	Space,
	Button,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { zodResolver } from "mantine-form-zod-resolver"

// Mantine notifications
import { notifications } from "@mantine/notifications"

// Zod
import { z } from "zod"

// Tabler icons
import { IconSend2 } from "@tabler/icons-react"

// ========================================
// CONTACT
// ========================================

export function Contact() {
	// Email schema
	const schema = z.object({
		firstName: z
			.string()
			.trim()
			.min(1, { message: "First name is required" })
			.max(100, { message: "First name must be at most 50 characters" }),
		lastName: z
			.string()
			.trim()
			.min(1, { message: "Last name is required" })
			.max(100, { message: "Last name must be at most 50 characters" }),
		email: z
			.string()
			.trim()
			.email({ message: "Invalid email" })
			.max(100, { message: "Email must be at most 100 characters" }),
		subject: z
			.string()
			.trim()
			.min(1, { message: "Subject is required" })
			.max(100, { message: "Subject must be at most 100 characters" }),
		message: z
			.string()
			.trim()
			.min(1, { message: "Message is required" })
			.max(500, { message: "Message must be at most 500 characters" }),
	})

	// Email form
	const form = useForm({
		mode: "uncontrolled",
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		},
		validate: zodResolver(schema),
	})

	// Send email
	const handleSubmit = async () => {
		// Send api request
		const res = await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName: form.getValues().firstName,
				lastName: form.getValues().lastName,
				email: form.getValues().email,
				subject: form.getValues().subject,
				message: form.getValues().message,
			}),
		})

		// Check for errors
		if (!res.ok) {
			// Show error notification
			notifications.show({
				title: "Error",
				color: "red",
				message: "An error occurred. Please try again.",
			})

			// Return
			return
		}

		// Show success notification
		notifications.show({
			title: "Success",
			color: "green",
			message: "Your message has been sent.",
		})

		// Reset form
		form.reset()
	}

	// Render
	return (
		<div id="contact" data-section>
			<Container size="xl">
				<Center>
					<Stack justify="center" align="center">
						<Title>Contact</Title>
						<Space h="xl" />
						<Text ta="center">
							Interested in working together? Send me an email
							here.
						</Text>
						<Paper radius="md" shadow="md" w="100%" p="xl">
							<form
								onSubmit={form.onSubmit(() => handleSubmit())}
							>
								<Stack>
									<Group justify="space-between" grow>
										<TextInput
											key={form.key("firstName")}
											label="First Name"
											withAsterisk
											{...form.getInputProps("firstName")}
										></TextInput>
										<TextInput
											key={form.key("lastName")}
											label="Last Name"
											withAsterisk
											{...form.getInputProps("lastName")}
										></TextInput>
									</Group>
									<TextInput
										key={form.key("email")}
										label="Email"
										withAsterisk
										{...form.getInputProps("email")}
									></TextInput>
									<TextInput
										key={form.key("subject")}
										label="Subject"
										withAsterisk
										{...form.getInputProps("subject")}
									></TextInput>
									<Textarea
										key={form.key("message")}
										label="Message"
										withAsterisk
										{...form.getInputProps("message")}
										minRows={4}
										autosize
									></Textarea>
									<Center>
										<Button
											type="submit"
											justify="space-between"
											loading={form.submitting}
											leftSection={<span />}
											rightSection={
												<IconSend2
													size={16}
													stroke={1.3}
												/>
											}
											w="50%"
											mt="md"
										>
											Send
										</Button>
									</Center>
								</Stack>
							</form>
						</Paper>
						<Space h="xl" />
					</Stack>
				</Center>
			</Container>
		</div>
	)
}
