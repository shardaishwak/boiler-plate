import React from "react"
import styles from "./App.module.scss"

const App = props => {
	return (
		<div>
			<div className={styles.App}>
				<h1>Ishwak Boilerplate</h1>
				<p> => npm install (install all packages and dependencies)</p>
				<p>
					{" "}
					=> npm start (start the server. If error: see the documentaition)
				</p>
				<p>
					{" "}
					=> npm build (build the entire app. If error: see the documentaition)
				</p>
				<h4>
					To get started, first clear all the "App.module.scss", so you can
					start from start. Then clear the "App.js" file.
				</h4>
			</div>
		</div>
	)
}

export default App
