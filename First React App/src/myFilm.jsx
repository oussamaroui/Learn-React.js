export default function Film(props){
    return (
        <div className="card">
            <img src={props.img} alt="img" />
            <div>
                <p className='p'>{props.title}</p>
                <button onClick={props.click}>Watch</button>
            </div>
        </div>
    );
}