import { useContext } from "react"
import { Theme } from "./useStatee"

let PageContext = () => {
    let T = useContext(Theme)
    return(
        <h4>Current Theme: <i>{T}</i></h4>
    );
}
export default PageContext