import {Bank} from "./bank";
import {Upgrades} from "./upgrades";
import {ClickerGameDefinitions, UpgradeItem} from "../../types/clickertypes";

type Dependency<TType extends abstract new (...args: any) => any> = {
	new(...args: ConstructorParameters<TType>): InstanceType<TType>;
}

interface ClickerParams
{
	gameDefinitions: ClickerGameDefinitions;
	bank: {
		constructor: Dependency<typeof Bank>
	}
	upgrades: {
		list: Record<string, UpgradeItem>,
		constructor: Dependency<typeof Upgrades>
	}
}

export class ClickerGame
{
	private constructor(
		private readonly definitions: ClickerGameDefinitions,
		private readonly bank: Bank,
		private readonly upgrades: Upgrades
	)
	{
	}

	public static createClicker(params: ClickerParams)
	{
		const gameDefinitions = params.gameDefinitions;
		const bank = new params.bank.constructor();
		const upgrades = new params.upgrades.constructor(params.upgrades.list, bank);

		return new ClickerGame(
			gameDefinitions,
			bank,
			upgrades
		);
	}
}