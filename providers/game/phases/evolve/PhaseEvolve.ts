import {ClickerGame} from "../../clickerGame";
import {PhaseEvolveUpgradeDefinitions} from "./PhaseEvolveUpgrades";
import {Upgrades} from "../../upgrades";
import {Bank} from "../../bank";

export const phaseEvolve = ClickerGame.createClicker({
	gameDefinitions: {
		game: {
			baseImageUrl: "",
			label: "Evolution",
		},
		currency: {
			label: "Species",
			largeImageUrl: "",
			smallImageUrl: "",
			multiplier: BigInt(1)
		}
	},
	upgrades: {
		list: PhaseEvolveUpgradeDefinitions,
		constructor: Upgrades
	},
	bank: {
		constructor: Bank
	}
})