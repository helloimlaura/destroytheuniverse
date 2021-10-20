export interface UpgradeItem
{
	id: string;
	display: UpgradeDisplay;
}

export interface UpgradeDisplay
{
	// iconUrl: string;
	// smallImageUrl: string;
	// largeImageUrl: string;
}

export interface ClickerGameDefinitions
{
	currency: {
		label: string;
		smallImageUrl: string;
		largeImageUrl: string;
		multiplier: bigint;
	},
	game: {
		label: string;
		baseImageUrl: string;
	}
}