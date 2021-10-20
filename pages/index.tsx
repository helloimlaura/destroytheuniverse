import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ClickerGameFederatedPhase} from "../components/game/ClickerGameFederatedPhase";
import {UpgradesList} from "../components/game/upgrades/UpgradesList";

const Home: NextPage = () =>
{
	return (
		<div className={styles.container}>
			<ClickerGameFederatedPhase>
				<div>
					<UpgradesList />
				</div>
			</ClickerGameFederatedPhase>
		</div>
	)
}

export default Home
