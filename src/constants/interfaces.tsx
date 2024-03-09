/** @format */
import React from "react";

export interface linkAttribube {
	title: string;
	link: string;
	close: boolean;
	setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface navlink {
	title: string;
	path: string;
}

export interface AboutMsg {
	title: string;
	msg: string;
}
type Ionc = "1" | "2" | "3" | "4" | "5" | "6";
export type Menu = "1" | "2" | "3" | "4" | "5";
export interface serciceItem {
	title: string;
	details: string;
	Icon: Ionc;
	first?: boolean;
}

export interface serciceItem2 {
	title: string;
	description: string;
	image: string;
	// Icon: IconType;
}
