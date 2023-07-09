import React, { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import ReactDOM from 'react-dom/client'
import PageContext from "./Context";

//################# useContext #################
export let Theme = createContext()

export default function App(){
    //################# useState #################
    let [walletCHange, setChange] = useState(0) ;

    let [wallet, setMoney] = useState(0) ;
    let put = () =>{
        setMoney(wallet +1);
        setChange(walletCHange +1);
    }
    let take = () =>{
        setMoney(wallet -1);
        setChange(walletCHange +1);
    }

    //################# useEffect #################
    //useEffect(function, ref) -> An event that does not occur until the element associated with it changes.
    //-> ex : maghadish ytktb log 7ta ytbdl ref li howa walletCHange f had l7ala,
    //-> ila kant array khawya = ytdeclara mra w7da f load d l page, ila makan walo kytdeclara f kola render.
    useEffect(() => {
        console.log(walletCHange);
    }, [walletCHange])

    //################# useRef #################
    // kat9der t7kem f element li kt7et fih ref={r} b useEffect t9der fir fih ay 7aja.
    let r = useRef(null) ;
    useEffect(()=>{
        r.current.focus()
    }, []) // drna [] bash yb9a ytbe9 l effect f kola reload

    //################# useReducer #################
    let reducer = (state, action) => {
        switch(action){
            case 'plus':
                return state + 1;
            case 'minse':
                return state - 1;
            case 'reset':
                return 0;
        }
    }
    let [state, dispatch] = useReducer(reducer, 0)


    return(
        <>
            <h1>//useState : </h1>
            <button onClick={put}>Put Money</button><br />
            <button onClick={take}>Take Money</button><br />
            <p>The currency in my wallet is {wallet} dollar(s).</p>
            <h1>//useEffect : </h1>
            <p>Wallet Changes : {walletCHange}</p>
            <h1>//useRef : </h1>
            <input ref={r} />
            <h1>//useContext : </h1>
            <Theme.Provider value='Dark'>
                <PageContext />
            </Theme.Provider>
            <h1>//useReducer : </h1>
            <button onClick={()=>{dispatch('plus')}}>+</button>
            <button onClick={()=>{dispatch('minse')}}>-</button>
            <button onClick={()=>{dispatch('reset')}}>Reset</button>
            <p>{state}</p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('myRoot2')).render(<App />)