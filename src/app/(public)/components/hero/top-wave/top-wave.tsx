/* ================================================================
Description: Top wave component for the hero section
Author: Noah Huesman

Creation Date: 01/14/2025
Modification History:
#1 (01/14/2025) - Initial creation - Noah Huesman
================================================================ */

// ========================================
// IMPORTS
// ========================================

// CSS
import classes from "./top-wave.module.css"

// ========================================
// TOP WAVE
// ========================================

export function TopWave({ colors }: { colors: string[] }) {
	// Render
	return (
		<svg
			id="visual"
			viewBox="0 0 900 600"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			preserveAspectRatio="none"
			width="100%"
			height="100%"
		>
			<path
				className={classes.topWave1}
				d="M0 151L18.8 146.3C37.7 141.7 75.3 132.3 112.8 137.8C150.3 143.3 187.7 163.7 225.2 177.7C262.7 191.7 300.3 199.3 337.8 196.7C375.3 194 412.7 181 450.2 173.5C487.7 166 525.3 164 562.8 169.3C600.3 174.7 637.7 187.3 675.2 187.5C712.7 187.7 750.3 175.3 787.8 168C825.3 160.7 862.7 158.3 881.3 157.2L900 156L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
				fill={colors[7]}
			></path>
			<path
				className={classes.topWave2}
				d="M0 183L18.8 178.2C37.7 173.3 75.3 163.7 112.8 155.3C150.3 147 187.7 140 225.2 138.3C262.7 136.7 300.3 140.3 337.8 138.8C375.3 137.3 412.7 130.7 450.2 129.5C487.7 128.3 525.3 132.7 562.8 138.5C600.3 144.3 637.7 151.7 675.2 154.8C712.7 158 750.3 157 787.8 158.2C825.3 159.3 862.7 162.7 881.3 164.3L900 166L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
				fill={colors[6]}
			></path>
			<path
				className={classes.topWave3}
				d="M0 133L18.8 126.5C37.7 120 75.3 107 112.8 102.3C150.3 97.7 187.7 101.3 225.2 102.8C262.7 104.3 300.3 103.7 337.8 106.8C375.3 110 412.7 117 450.2 119C487.7 121 525.3 118 562.8 118.7C600.3 119.3 637.7 123.7 675.2 130.2C712.7 136.7 750.3 145.3 787.8 148.7C825.3 152 862.7 150 881.3 149L900 148L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
				fill={colors[5]}
			></path>
			<path
				className={classes.topWave4}
				d="M0 86L18.8 84.5C37.7 83 75.3 80 112.8 84.3C150.3 88.7 187.7 100.3 225.2 102.8C262.7 105.3 300.3 98.7 337.8 100.8C375.3 103 412.7 114 450.2 117C487.7 120 525.3 115 562.8 116C600.3 117 637.7 124 675.2 122.8C712.7 121.7 750.3 112.3 787.8 107.8C825.3 103.3 862.7 103.7 881.3 103.8L900 104L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
				fill={colors[4]}
			></path>
			<path
				className={classes.topWave5}
				d="M0 65L18.8 68.5C37.7 72 75.3 79 112.8 77.8C150.3 76.7 187.7 67.3 225.2 71.2C262.7 75 300.3 92 337.8 95.3C375.3 98.7 412.7 88.3 450.2 82.3C487.7 76.3 525.3 74.7 562.8 76.7C600.3 78.7 637.7 84.3 675.2 85.5C712.7 86.7 750.3 83.3 787.8 82.7C825.3 82 862.7 84 881.3 85L900 86L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
				fill={colors[3]}
			></path>
			<path
				className={classes.topWave6}
				d="M0 69L18.8 69.7C37.7 70.3 75.3 71.7 112.8 73.8C150.3 76 187.7 79 225.2 74.2C262.7 69.3 300.3 56.7 337.8 57.5C375.3 58.3 412.7 72.7 450.2 79.2C487.7 85.7 525.3 84.3 562.8 80.5C600.3 76.7 637.7 70.3 675.2 69.5C712.7 68.7 750.3 73.3 787.8 74.5C825.3 75.7 862.7 73.3 881.3 72.2L900 71L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
				fill={colors[2]}
			></path>
			<path
				className={classes.topWave7}
				d="M0 39L18.8 42.5C37.7 46 75.3 53 112.8 56C150.3 59 187.7 58 225.2 58.3C262.7 58.7 300.3 60.3 337.8 60.7C375.3 61 412.7 60 450.2 56.3C487.7 52.7 525.3 46.3 562.8 42.2C600.3 38 637.7 36 675.2 33.8C712.7 31.7 750.3 29.3 787.8 31.5C825.3 33.7 862.7 40.3 881.3 43.7L900 47L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
				fill={colors[1]}
			></path>
			<path
				className={classes.topWave8}
				d="M0 20L18.8 22.3C37.7 24.7 75.3 29.3 112.8 30C150.3 30.7 187.7 27.3 225.2 28.5C262.7 29.7 300.3 35.3 337.8 35.3C375.3 35.3 412.7 29.7 450.2 28C487.7 26.3 525.3 28.7 562.8 28C600.3 27.3 637.7 23.7 675.2 22C712.7 20.3 750.3 20.7 787.8 19.2C825.3 17.7 862.7 14.3 881.3 12.7L900 11L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
				fill={colors[0]}
			></path>
		</svg>
	)
}
