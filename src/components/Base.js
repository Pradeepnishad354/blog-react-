import CustomNavbar from "../components/CustomNavbar"

const Base=({title="Welcome to My Website",children})=>{

    return (
<div className="container-fluid p-0 m-0">
<CustomNavbar/>
{children}
{/* <h1>This is Footer</h1> */}
</div>

    )

}

export default Base;