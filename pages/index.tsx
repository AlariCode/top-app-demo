import React from "react";
import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Some h1 text</Htag>
			<Button appearance="primary" arrow="down">Text</Button>
			<Button appearance="ghost" arrow="right">Text</Button>
		</>
	);
}
