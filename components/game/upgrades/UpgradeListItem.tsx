import {UpgradeStatus} from "../../../providers/game/upgrades";
import React from "react";

interface UpgradeListItemProps
{
	status: UpgradeStatus | undefined;
}


export const UpgradeListItem: React.FC<UpgradeListItemProps> = ({
	status
}) =>
{
	if (status === undefined)
	{
		return null;
	}

	const {
		dps
	} = status;

	return (
		<div>{dps}</div>
	);
}