import {DataStore} from "../global/datastore/datastore";
import {UpgradeItem} from "../../types/clickertypes";
import {Bank} from "./bank";

type Status = Record<string, UpgradeStatus>;

export interface UpgradesPayload
{
	status: Status;
	currentDps: bigint;
}

interface UpgradeStatus
{
	index: number;
	level: number;
	dps: bigint;
	nextLevel: number;
	nextLevelDps: bigint;
	nextLevelCost: bigint;
}


export class Upgrades extends DataStore<UpgradesPayload>
{
	private nextLevelCosts: Record<string, bigint> = {};

	constructor(
		private readonly upgradeDefinitions: Record<string, UpgradeItem>,
		private readonly bank: Bank
	)
	{
		super({
			status: {},
			currentDps: BigInt(0)
		});
	}

	public actions = this.createActions({
		buyUpgrade: (state, upgradeId: string) =>
		{
			const upgrade = state.status[upgradeId];
			const cost = state.status[upgradeId].nextLevelCost;
			const newLevel = upgrade.level + 1;

			if (this.bank.state.savings < cost)
			{
				throw new Error(`You can't afford to upgrade ${this.upgradeDefinitions[upgradeId].display.label} (Cost: ${cost}).`)
			}

			this.bank.actions.subtract(cost);

			const newStatus: Status = {
				...state.status,
				[upgradeId]: {
					...upgrade,
					level: upgrade.level + 1,
					dps: this.calculateLevelDps(upgradeId, newLevel),
					nextLevel: newLevel,
					nextLevelCost: this.calculateLevelCost(upgradeId, newLevel + 1),
					nextLevelDps: this.calculateLevelDps(upgradeId, newLevel + 1),
				}
			};

			return ({
				status: newStatus,
				currentDps: this.calculateTotalDps(newStatus)
			})
		}
	});

	private updateNextLevelCosts()
	{
		this.nextLevelCosts = Object.keys(this.state.status).reduce((acc, upgradeId) =>
		{
			acc[upgradeId] = this.state.status[upgradeId].nextLevelCost;

			return acc;
		}, {} as Record<string, bigint>);
	}

	private calculateLevelCost(upgradeId: string, level: number): bigint
	{
		return BigInt(0);
	}

	private calculateLevelDps(upgradeId: string, level: number): bigint
	{
		return BigInt(0);
	}

	private calculateTotalDps(status: Status)
	{
		const totalDps = Object.values(status).reduce((acc, upgrade) =>
		{
			return acc += upgrade.dps;
		}, BigInt(0));

		return totalDps;
	}
}