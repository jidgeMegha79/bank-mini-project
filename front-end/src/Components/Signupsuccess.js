import {Link} from 'react-router-dom'
const Signupsuccess=()=>{
    return(
        <div>
          <h1>
              You are successfully signup to account.
              For  Login to your account with emailid and password  
              <Link to='/login'> click here</Link>
          </h1>
        </div>

    )
}
export default Signupsuccess;