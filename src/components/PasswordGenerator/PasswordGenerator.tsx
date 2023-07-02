import { useState } from "react";

import PasswordForm from "components/PasswordForm/PasswordForm";
import * as SC from "./PasswordGeneratorStyled"

const PasswordGenerator = (): JSX.Element => {
    const [password, setPassword] = useState<string>("")
    const [strengthIndicator, setStrengthIndicator] = useState<string>("too weak!")

  const strength = ["too weak!", "weak", "medium", "strong"]
   
    const handleGenerate = (status:boolean[]) => {

        console.log(status);
        
        status.length > 0 ? setStrengthIndicator(strength[status.length - 1]) : setStrengthIndicator("too weak!")
    }
    
    return (<SC.Container>
        <SC.Title>Password Generator</SC.Title>
        <PasswordForm password={password} handleGenerate={handleGenerate} strengthIndicator={strengthIndicator } />
    </SC.Container> );
}
 
export default PasswordGenerator;