import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Start = () => {
  const navigate=useNavigate()
 
	const navigateToGame = () => {
		navigate('/tictactoe?player1='+formData.player1Name+'&&player2='+formData.player2Name);
	};

    const navigateToHome = () => {
      navigate('/');
	};

    const [formData, setFormData] = useState({'player1Name':'','player2Name':''});

    const handleInputChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const isButtonDisabled = !(formData.player1Name?.trim() && formData.player2Name?.trim())
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  return (<><Navbar/>
    <main className='bg-slate-600 h-[100vh]'>
    <h1 className=" mb-[20px] text-white text-[60px] flex justify-center items-center">Welcome To Tic Tac Toe</h1>
		<h2 className="mt-1 mb-1 text-white text-[40px] flex justify-center items-center">Player Names</h2>

        <div className="grid justify-center text-center">
            <div className="w-full items-center flex text-[18px] mt-[40px] mb-[20px] my-auto justify-center">
                <form className='m-1' onSubmit={handleSubmit}>
                    <label className='block text-center text-white m-[10px] pb-[10px]'>
                        Player 1 Name: <></>
                        <input className='h-[20px] text-black p-2 rounded-md'
                        type="text"
                        name="player1Name"
                        value={formData.player1Name}
                        onChange={handleInputChange}
                        required
                        />
                    </label>
                    <label>
                        Player 2 Name: <></>
                        <input className='h-[20px] text-black p-2 rounded-md'
                        type="text"
                        name="player2Name"
                        value={formData.player2Name}
                        onChange={handleInputChange}
                        required
                        />
                    </label>
                </form>
            </div>
            <div className="flex">
                <button className="w-[200px] h-[70px] border-0 cursor-pointer rounded-[50px] bg-[#1f3540] font-bold text-[30px] text-[#26ffcb] mx-[25px] my-[10px] p-[10px] transition-all disabled:bg-gray-500 disabled:text-white disabled:cursor-default " onClick={navigateToHome}>HOME</button>
                <button className={`w-[200px] h-[70px] border-0 cursor-pointer rounded-[50px] bg-[#1f3540] font-bold text-[30px] text-[#26ffcb] mx-[25px] my-[10px] p-[10px] transition-all disabled:bg-gray-500 disabled:text-white disabled:cursor-default  ${isButtonDisabled ? 'disabled' : ''}`} onClick={navigateToGame} disabled={isButtonDisabled}>START</button>
            </div>
        </div>
        </main> </>
  )
}

export default Start