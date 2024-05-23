import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface ProgressBarProps {
	Icon: IconType;
	text: string;
}

export default function ProgressBar({
	Icon,
	text,
}: ProgressBarProps) {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div className="w-11/12 mx-auto mt-5 mb-5">
			<div className="flex justify-between mb-3">
				<div className="flex gap-1 items-center">
					<Icon className="text-3xl" />
					<h1>{text}</h1>
				</div>
			</div>
		</div>
	);
}
