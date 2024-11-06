import { Link } from "react-router-dom";
import { Input } from "../../ui/components/ui/Input"


export default function Login() {
    return (
      <>
        <div>
            Login
        </div>

        <Input/>

        <Link to={'/workspace'}>Login</Link>
      </>
    );
  }




  