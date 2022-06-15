
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Data from "./data";


const Details = () => {
    console.log(Data[0]);
    

    const {id} = useParams()
    // const [useData, setUseData] = useState(Data[id - 1])
     return ( 
           
            <div className="details">
                 {/* {
                 id === Data.id  ?  */}
                 <div className="idk">
                    <img src={Data[id -1 ].img} alt="a square" />
                    <h1 className="ok">{Data[id - 1].location}</h1>
                    <h2>{Data[id - 1].country}</h2>
                    <p>{Data[id - 1].description} </p>
                </div>
             
            <div className="error"><Link to={"/"}>return</Link> </div>
                
            </div>
     )
    
       
    

}
 
export default Details;