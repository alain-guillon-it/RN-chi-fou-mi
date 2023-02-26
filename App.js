// Dépendances
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';

const rock = require('./src/images/rock.jpg');
const paper = require('./src/images/paper.jpg');
const scissors = require('./src/images/scissors.jpg');
const noChoice = require('./src/images/no_choice.jpg');

export default function App() {
	// Game Start
	const [gameStart, setGameStart] = useState(false);
	const [rockChoiceSelected, setRockChoiceSelected] = useState(false);
	const [paperChoiceSelected, setPaperChoiceSelected] = useState(false);
	const [scissorsChoiceSelected, setScissorsChoiceSelected] = useState(false);
	const [buttonStartDisabled, setButtonStartDisabled] = useState(true);
	const [checkRockMessage, setCheckRockMessage] = useState('❌');
	const [checkPaperMessage, setCheckPaperMessage] = useState('❌');
	const [checkScissorsMessage, setCheckScissorsMessage] = useState('❌');
	const [showResultImage, setShowResultImage] = useState('');

	// Scores
	const [playerScore, setPlayerScore] = useState(0);
	const [computerScore, setComputerScore] = useState(0);
	const [counterDrawing, setCounterDrawing] = useState(0);
	const [manche, setManche] = useState(0);

	// Images
	const [image, setImage] = useState(noChoice);
	const [images, setImages] = useState([rock, paper, scissors]);
	const [computerImage, setComputerImage] = useState(image);
	const [playerImage, setPlayerImage] = useState([]);

	const handleRockSelected = () => {
		setPlayerImage(images[0]);
		setCheckRockMessage('✅');
		setCheckPaperMessage('❌');
		setCheckScissorsMessage('❌');
		setRockChoiceSelected(true);
		setPaperChoiceSelected(false);
		setScissorsChoiceSelected(false);
		setButtonStartDisabled(false);
		setComputerImage(images[Math.floor(Math.random() * images.length)]);
	};

	const handlePaperSelected = () => {
		setPlayerImage(images[1]);
		setCheckRockMessage('❌');
		setCheckPaperMessage('✅');
		setCheckScissorsMessage('❌');
		setRockChoiceSelected(false);
		setPaperChoiceSelected(true);
		setScissorsChoiceSelected(false);
		setButtonStartDisabled(false);
		setComputerImage(images[Math.floor(Math.random() * images.length)]);
	};

	const handleScissorsSelected = () => {
		setPlayerImage(images[2]);
		setCheckRockMessage('❌');
		setCheckPaperMessage('❌');
		setCheckScissorsMessage('✅');
		setRockChoiceSelected(false);
		setPaperChoiceSelected(false);
		setScissorsChoiceSelected(true);
		setButtonStartDisabled(false);
		setComputerImage(images[Math.floor(Math.random() * images.length)]);
	};

	const handleNewGameClick = () => {
		console.log(images);
		console.log('playerImage', playerImage);
		console.log('computerImage', computerImage);
		setShowResultImage(computerImage);

		setManche(manche + 1);

		// PLAYER WIN
		// PIERRE vs CISEAUX
		if (playerImage == 1 && computerImage == 3) {
			setPlayerScore(playerScore + 1);
		}

		// PLAYER WIN
		// FEUILLE vs PIERRE
		if (playerImage == 2 && computerImage == 1) {
			setPlayerScore(playerScore + 1);
		}

		// PLAYER WIN
		// CISEAUX vs FEUILLE
		if (playerImage == 3 && computerImage == 2) {
			setPlayerScore(playerScore + 1);
		}

		// COMPUTER WIN
		// PIERRE vs FEUILLE
		if (playerImage == 1 && computerImage == 2) {
			setComputerScore(computerScore + 1);
		}

		// COMPUTER WIN
		// FEUILLE vs CISEAUX
		if (playerImage == 2 && computerImage == 3) {
			setComputerScore(computerScore + 1);
		}

		// COMPUTER WIN
		// CISEAUX vs PIERRE
		if (playerImage == 3 && computerImage == 1) {
			setComputerScore(computerScore + 1);
		}

		// MATCH NUL
		// PIERRE vs PIERRE
		if (playerImage == 1 && computerImage == 1) {
			setCounterDrawing(counterDrawing + 1);
		}

		// MATCH NUL
		// FEUILLE vs FEUILLE
		if (playerImage == 2 && computerImage == 2) {
			setCounterDrawing(counterDrawing + 1);
		}

		// MATCH NUL
		// CISEAUX vs CISEAUX
		if (playerImage == 3 && computerImage == 3) {
			setCounterDrawing(counterDrawing + 1);
		}

		console.log('\n-------------------------------------------------');
		console.log({ gameStart });
		console.log({ counterDrawing });
		console.log({ playerImage });
		console.log({ playerScore });
		console.log({ computerImage });
		console.log({ computerScore });
		console.log('-------------------------------------------------');
	};

	// RESET
	const handleReloadGameClick = () => {
		setComputerImage(image);
		setComputerScore(0);
		setPlayerScore(0);
		setCounterDrawing(0);
		setRockChoiceSelected(false);
		setPaperChoiceSelected(false);
		setScissorsChoiceSelected(false);
		setButtonStartDisabled(true);
		setGameStart(false);
		setCheckRockMessage('❌');
		setCheckPaperMessage('❌');
		setCheckScissorsMessage('❌');
		setShowResultImage(image);
		setManche(0);
	};

	return (
		<View style={styles.container}>
			{/* SCORES */}
			<View style={styles.containerScore}>
				{/* SCORE PLAYER */}
				<View
					style={[styles.containerScore__commun, styles.containerScore__left]}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
							paddingTop: 20,
							paddingHorizontal: 32,
						}}
					>
						<Text
							style={{
								fontSize: 20,
								textTransform: 'uppercase',
								fontWeight: 'bold',
								color: '#f1f1f1',
							}}
						>
							Joueur
						</Text>
						<Text
							style={{
								fontSize: 32,
								textTransform: 'uppercase',
								fontWeight: 'bold',
								color: '#00f100',
							}}
						>
							{playerScore}
						</Text>
					</View>
				</View>

				{/* SCORE COMPUTER */}
				<View
					style={[styles.containerScore__commun, styles.containerScore__right]}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
							paddingTop: 20,
							paddingHorizontal: 32,
						}}
					>
						<Text
							style={{
								fontSize: 32,
								textTransform: 'uppercase',
								fontWeight: 'bold',
								color: '#f10000',
							}}
						>
							{computerScore}
						</Text>
						<Text
							style={{
								fontSize: 20,
								textTransform: 'uppercase',
								fontWeight: 'bold',
								color: '#f1f1f1',
							}}
						>
							Ordi.
						</Text>
					</View>
				</View>
			</View>
			{/* RANDOM CHOICE COMPUTER */}
			<View style={styles.containerChoiceComputer}>
				<Text
					style={{
						color: 'white',
						fontSize: 24,
						marginBottom: 10,
						textTransform: 'uppercase',
						fontWeight: 'bold',
					}}
				>
					Manche : {manche}
				</Text>
				<Image
					source={showResultImage}
					style={{
						height: 250,
						width: 250,
						borderColor: '#111111',
						borderWidth: 6,
						borderRadius: 10,
					}}
				/>
			</View>
			{/* BUTTON JOUER */}
			<View style={styles.containerPlay}>
				<Pressable
					backgroundColor={buttonStartDisabled ? '#999999' : '#404258'}
					paddingVertical={10}
					paddingHorizontal={20}
					elevation={2}
					borderRadius={10}
					onPress={handleNewGameClick}
					android_ripple={{ color: '#6B728E', radius: 50 }}
					disabled={buttonStartDisabled}
				>
					<Text
						style={{
							color: '#f1f1f1',
							textTransform: 'uppercase',
							fontWeight: '900',
						}}
					>
						{buttonStartDisabled ? 'Fait un choix' : 'Jouer'}
					</Text>
				</Pressable>

				<Pressable
					backgroundColor='darkred'
					paddingVertical={10}
					paddingHorizontal={20}
					elevation={5}
					borderRadius={10}
					onPress={handleReloadGameClick}
					android_ripple={{ color: '#6B728E', radius: 50 }}
				>
					<Text
						style={{
							color: '#f1f1f1',
							textTransform: 'uppercase',
							fontWeight: '900',
						}}
					>
						Recommencer
					</Text>
				</Pressable>
			</View>
			{/* BUTTONS CHOICE PLAYER */}
			<View style={styles.containerChoicePlayer}>
				{/* PLAYER IMAGE ROCK */}
				<Pressable onPress={handleRockSelected}>
					<Image
						source={images[0]}
						style={{
							height: 100,
							width: 100,
							borderColor: '#111111',
							borderWidth: 6,
							borderRadius: 10,
						}}
					/>
					<Text
						style={{
							textAlign: 'center',
							color: '#f1f1f1',
							fontWeight: 'bold',
							marginTop: 5,
							textTransform: 'uppercase',
						}}
					>
						Pierre {checkRockMessage}
					</Text>
				</Pressable>

				{/* PLAYER IMAGE FEUILLE */}
				<Pressable onPress={handlePaperSelected}>
					<Image
						source={images[1]}
						style={{
							height: 100,
							width: 100,
							borderColor: '#111111',
							borderWidth: 6,
							borderRadius: 10,
						}}
					/>
					<Text
						style={{
							textAlign: 'center',
							color: '#f1f1f1',
							fontWeight: 'bold',
							marginTop: 5,
							textTransform: 'uppercase',
						}}
					>
						Feuille {checkPaperMessage}
					</Text>
				</Pressable>

				{/* PLAYER IMAGE SCISSORS */}
				<Pressable onPress={handleScissorsSelected}>
					<Image
						source={images[2]}
						style={{
							height: 100,
							width: 100,
							borderColor: '#111111',
							borderWidth: 6,
							borderRadius: 10,
						}}
					/>
					<Text
						style={{
							textAlign: 'center',
							color: '#f1f1f1',
							fontWeight: 'bold',
							marginTop: 5,
							textTransform: 'uppercase',
						}}
					>
						Ciseaux {checkScissorsMessage}
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 5,
		backgroundColor: '#404258',
	},

	containerScore: {
		flex: 1,
		backgroundColor: '#191919',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderBottomWidth: 6,
		borderColor: '#111111',
	},
	containerScore__commun: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerScore__left: {},
	containerScore__right: {},

	containerChoiceComputer: {
		flex: 2,
		backgroundColor: '#574E6D',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 32,
	},
	containerPlay: {
		flex: 0.5,
		backgroundColor: '#DDDDDD',
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderTopWidth: 6,
		borderBottomWidth: 6,
		borderColor: '#111111',
		flexDirection: 'row',
	},
	containerChoicePlayer: {
		flex: 1.5,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#4B586E',
	},
});
