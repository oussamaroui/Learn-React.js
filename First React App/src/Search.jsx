export default function Search(props){
    let cng = e => {
        console.log(e);
    }
    return (
        <>
            <input type="text" id="inpS" onChange={cng}/>
            <button >Search</button>
        </>
    );
}