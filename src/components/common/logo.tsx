"use client"
import React from "react";
import Link from "next/link";

import INFO from "@/helpers/data/user";

import "./styles/logo.css";

const Logo = (props: { width: any; link?: any; }) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo ml-20" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link href="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
