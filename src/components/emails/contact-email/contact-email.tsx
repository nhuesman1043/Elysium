/* ================================================================
Description: Email template for emails sent via the contact form 
Author: Noah Huesman

Creation Date: 01/26/2025
Modification History:
#1 (01/26/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// React email
import { Html, Body, Container, Text, Heading } from "@react-email/components"

// ========================================
// CONTACT EMAIL
// ========================================

export default function ContactEmail({
	firstName,
	lastName,
	email,
	message,
}: {
	firstName: string
	lastName: string
	email: string
	message: string
}) {
	return (
		<Html>
			<Body style={styles.body}>
				<Container style={styles.container}>
					<Heading style={styles.heading}>
						Contact Request From Portfolio
					</Heading>
					<Text style={styles.text}>
						<strong>From:</strong> {firstName} {lastName}
					</Text>
					<Text style={styles.text}>
						<strong>Email:</strong>{" "}
						<a href={`mailto:${email}`}>{email}</a>
					</Text>
					<Text style={styles.text}>
						<strong>Message:</strong>
					</Text>
					<Text style={styles.message}>{message}</Text>
				</Container>
			</Body>
		</Html>
	)
}

// ========================================
// STYLES
// ========================================

const styles = {
	body: {
		fontFamily: "Arial, sans-serif",
		backgroundColor: "#f9f9f9",
		margin: 0,
		padding: "20px",
	},
	container: {
		maxWidth: "600px",
		margin: "0 auto",
		backgroundColor: "#ffffff",
		borderRadius: "8px",
		padding: "20px",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
	},
	heading: {
		fontSize: "20px",
		fontWeight: "bold",
		marginBottom: "20px",
		color: "#333",
	},
	text: {
		fontSize: "16px",
		color: "#555",
		marginBottom: "10px",
	},
	message: {
		fontSize: "16px",
		color: "#333",
		backgroundColor: "#f3f3f3",
		padding: "15px",
		borderRadius: "6px",
		border: "1px solid #ddd",
	},
}
