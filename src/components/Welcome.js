import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Navbar from './Navbar';

const Welcome = () => {
    const navigate = useNavigate()
	const navigateToNewGame = () => {
		navigate('/start')
	};
	
	const [games, setGames] = useState([])
	useEffect(() => {
		axios.get('http://localhost:3001/games')
			.then(games => setGames(games.data))
			.catch(err => console.error(err))
	})
  return (<><Navbar/>
    <main className='bg-slate-600 h-[100vh]'>
			<h1 className=" mb-[20px] text-white text-[60px] flex justify-center items-center">Welcome To Tic Tac Toe</h1>
			<div className="w-full flex items-center justify-center">
			<button className="w-[200px] h-[70px] border-0 cursor-pointer rounded-[50px] bg-[#1f3540] font-bold text-[30px] text-[#26ffcb] mx-[25px] p-[10px] transition-all" onClick={navigateToNewGame}>START</button>
			</div>
			
			{games && <><h2 className="mt-1 mb-1 text-white text-[40px] flex justify-center items-center">Game History</h2>
			<div className="my-auto mx-w-[800px] p-[20px]">
				<table className="w-full border-collapse rounded-[10px] overflow-hidden">
					<thead>
					<tr className='hover:bg-[#504c4c]'>
						<th className='p-[15px] border-[1px] border-white bg-[#333]'>Game</th>
						<th className='p-[15px] border-[1px] border-white bg-[#333]'>Score</th>
						<th className='p-[15px] border-[1px] border-white bg-[#333]'>Date</th>
					</tr>
					</thead>
					<tbody>
					{games.slice(0, 10).map((game, index) => (
						<tr key={index}>
						<td className='p-[15px] border-[1px] border-white'>{game.player1Name} vs. {game.player2Name}</td>
						<td className='p-[15px] border-[1px] border-white'>{game.player1Wins} - {game.player2Wins}</td>
						<td className='p-[15px] border-[1px] border-white'>{moment(game.matchDate).format('MMMM DD, YYYY h:mm A')}</td>
						</tr>
					))}
					</tbody>
				</table>
				
				</div> </>}
				</main></>
  )
}

export default Welcome