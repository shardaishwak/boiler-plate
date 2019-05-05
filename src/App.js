import React from "react"
import styles from "./App.module.scss"

const App = props => {
	return (
		<div className={styles.container}>
			<div className={styles.App_left}>
				<h1>Ishwak Boilerplate</h1>
				<p>This is my personal boilerplate for my react projects</p>
			</div>
			<div className={styles.App_right}>
				<div className={styles.command}>
					<div className={styles.arrow}>></div>
					git clone https://www.github.com/ishwaksharda/ishwak-boiler-plate.git
				</div>
				<div className={styles.command}>
					<div className={styles.arrow}>></div>
					npm install{" "}
				</div>
				<div className={styles.command}>
					<div className={styles.arrow}>></div>
					npm start
				</div>
				<div className={styles.command}>
					<div className={styles.arrow}>></div>
					npm build
				</div>
				<div className={styles.command}>
					<div className={styles.arrow}>></div>
					npm test
				</div>
			</div>
		</div>
	)
}

export default App
