export default function NavBar({onChange}){

    return(
        <div className="nav">
          <button onClick={onChange}>Clear Resume</button>
          <button>Load Example</button>
        </div>
    )
}  
  
  