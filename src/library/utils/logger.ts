/* ================================================================
Description: Logger configuration and instance using Winston
Author: Noah Huesman

Creation Date: 01/02/2025
Modification History:
#1 (01/02/2025) - Initial creation - Noah Huesman
#2 (01/28/2025) - Updated to log to console on prod and to logs folder on dev - Noah Huesman
================================================================ */

// ========================================
// DIRECTIVES
// ========================================

"use server"

// ========================================
// IMPORTS
// ========================================

// Winston
import winston from "winston"
import DailyRotateFile from "winston-daily-rotate-file"

// ========================================
// LOGGER LEVELS AND COLORS
// ========================================

// Log levels and colors
const logLevels = {
	levels: {
		error: 0,
		warn: 1,
		info: 2,
		debug: 3,
	},
	colors: {
		error: "red",
		warn: "yellow",
		info: "green",
		debug: "blue",
	},
}

// Add colors to console logs
winston.addColors(logLevels.colors)

// ========================================
// CREATE LOGGER
// ========================================

export const createLogger = async () => {
	// Define transports array
	const transports = []

	// Console transport for all environments
	transports.push(
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				winston.format.colorize(),
				winston.format.printf(
					({ level, message, timestamp }) =>
						`${timestamp} [${level}]: ${message}`
				)
			),
		})
	)

	// File transports for development only
	if (process.env.NODE_ENV === "development") {
		// Iterate over log levels and create file transports for different folders
		Object.keys(logLevels.levels).forEach((level) => {
			transports.push(
				new DailyRotateFile({
					filename: `logs/${level}/%DATE%.log`,
					datePattern: "YYYY-MM-DD",
					maxSize: "5m", // 5MB
					maxFiles: "7d", // 7 days
					level: level,
					format: winston.format.combine(
						winston.format.timestamp(),
						winston.format.json()
					),
				})
			)
		})
	}

	// Return logger instance
	return winston.createLogger({
		levels: logLevels.levels,
		transports,
	})
}
