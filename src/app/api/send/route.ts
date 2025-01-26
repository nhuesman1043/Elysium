/* ================================================================
Description: Send email via Resend route
Author: Noah Huesman

Creation Date: 01/26/2025
Modification History:
#1 (01/26/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// Resend
import { Resend } from "resend"

// Email components
import { ContactEmail } from "@/components/emails"

// Utils library
import { createLogger } from "@/library/utils"

// ========================================
// LOGGER INTIALIZATION
// ========================================

const logger = await createLogger()

// ========================================
// RESEND INTIALIZATION
// ========================================

const resend = new Resend(process.env.RESEND_API_KEY)

// ========================================
// SEND EMAIL VIA RESEND
// ========================================

export async function POST(req: Request) {
	try {
		// Parse request body
		const body = await req.json()

		// Send email
		const data = await resend.emails.send({
			from: process.env.NO_REPLY_EMAIL as string,
			to: [process.env.EMAIL_TO as string],
			subject: body.subject,
			react: ContactEmail({
				firstName: body.firstName,
				lastName: body.lastName,
				email: body.email,
				message: body.message,
			}),
		})

		// Log success in dev
		if (process.env.NODE_ENV === "development")
			logger.info(`Successfully sent email to: ${process.env.EMAIL_TO}`)

		// Return response
		return Response.json({ success: true, data }, { status: 200 })
	} catch (error) {
		// Log error
		logger.error("Email sending failed", {
			error: error instanceof Error ? error.message : "Unknown error",
		})

		// Return error response
		return Response.json(
			{
				success: false,
				error: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		)
	}
}
