import { Container } from "reactstrap"
import Base from "../../components/Base"
import AddPost from "../../components/AddPost"
import NewFeed from "../../components/NewFeed"
const UserDashboard =()=>{

    return(
        <>
        <Base></Base>
   
        {/* <h1>Welcome To User Dashboard</h1> */}

<div className="mt-2">
<Container
>

<AddPost/>


</Container>

</div>        

           
        </>
        
    )
}

export default UserDashboard