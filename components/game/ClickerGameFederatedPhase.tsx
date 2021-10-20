import {useRouter} from "next/router";
import React from "react";
import {ClickerGame, ClickerGameContext} from "../../providers/game/clickerGame";
import {phaseEvolve} from "../../providers/game/phases/evolve/PhaseEvolve";

export const ClickerGameFederatedPhase: React.FC = ({children}) => {
	return (
		<ClickerGameContext.Provider value={phaseEvolve}>
			{children}
		</ClickerGameContext.Provider>
	)
}