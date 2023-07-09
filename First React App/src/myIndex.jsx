import React from "react";
import Film from "./myFilm";
import Search from './Search'
import './myCss.css' ;
import one from './images/one.jpg'
import two from './images/two.jpg'
import three from './images/three.jpg'
import four from './images/four.jpg'


export default function App(){
    let propr = [
        {title : 'Oussama', img : one},
        {title : 'Amine', img : two},
        {title : 'Fatima', img : three},
        {title : 'Yassine', img : four}
    ];

    return(
        <div>
            <Search/>
            <div className="con">
                {    
                    propr.map((c, k) =>{
                        let click = () => {
                            alert(c.title);
                        }
                        return(
                            <Film key={k} title={c.title} img={c.img} click={click} />
                        );
                    })
                }
            </div>
        </div>
    );
}