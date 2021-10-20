import React from "react"
import {ClickerGameContext} from "../../../providers/game/clickerGame"
import {UpgradeListItem} from "./UpgradeListItem";

export const UpgradesList = () =>
{
	return (
		<ClickerGameContext.Consumer>
			{(context) => (
				<div>
					{Object.keys(context?.upgrades?.state?.status ?? {}).map(key => (
						<UpgradeListItem status={context?.upgrades?.state?.status[key]}/>
					))}
				</div>
			)}
		</ClickerGameContext.Consumer>
	)
}