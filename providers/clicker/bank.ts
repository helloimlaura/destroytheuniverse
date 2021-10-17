import {DataStore} from "../global/datastore/datastore";

interface BankPayload
{
	savings: bigint;
}

export class Bank extends DataStore<BankPayload>
{
	constructor()
	{
		super({
			savings: BigInt(0)
		});
	}

	public actions = this.createActions({
		add: (state, amount: bigint) => ({
			savings: state.savings + amount
		}),
		subtract: (state, amount: bigint) =>
		{
			if (amount > state.savings)
			{
				throw new Error(`Not enough currency available!`);
			}

			return {
				savings: state.savings - amount
			};
		}
	});
}