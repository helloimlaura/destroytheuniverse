import {UpgradeDefinitions} from "../../upgrades";
import {UpgradeItem} from "../../../../types/clickertypes";

const PhaseEvolveUpgradeDefinitionList: UpgradeItem[] = [
	{
		id: "enzyme",
		display: {
		}
	},
	{
		id: "nucleotide",
		display: {
		}
	},
	{
		id: "hydrothermal_vent",
		display: {
		}
	},
	{
		id: "bacteria_strain",
		display: {
		}
	},
	{
		id: "oxygen",
		display: {
		}
	},
	{
		id: "algae",
		display: {
		}
	},
	{
		id: "jellyfish",
		display: {
		}
	},
	{
		id: "fern",
		display: {
		}
	},
	{
		id: "frog",
		display: {
		}
	},
	{
		id: "virus",
		display: {

		}
	},
	{
		id: "pterodactyl",
		display: {

		}
	},
	{
		id: "trex",
		display: {

		}
	},
	{
		id: "penguin",
		display: {

		}
	},
	{
		id: "ostrich",
		display: {

		}
	},
	{
		id: "mammoth",
		display: {

		}
	},
	{
		id: "neanderthal",
		display: {

		}
	},
	{
		id: "archaic human",
		display: {

		}
	}
];

export const PhaseEvolveUpgradeDefinitions = PhaseEvolveUpgradeDefinitionList.reduce((acc, upgradeItem) =>
{
	acc[upgradeItem.id] = upgradeItem;

	return acc;
}, {} as UpgradeDefinitions);