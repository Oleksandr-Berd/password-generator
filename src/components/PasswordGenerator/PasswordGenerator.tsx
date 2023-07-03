import { useState } from "react";

import PasswordForm from "components/PasswordForm/PasswordForm";
import * as SC from "./PasswordGeneratorStyled"
import { generatePassword, Options } from "utils/generatePassword";

const PasswordGenerator = (): JSX.Element => {
    const [password, setPassword] = useState<string>("")
    const [strengthIndicator, setStrengthIndicator] = useState<string>("")

  const strength = ["too weak!", "weak", "medium", "strong"]
   
    const handleGenerate = (status: boolean[], charLength: number, options: Options) => {
        
        status.length > 0 && charLength > 3 ? setStrengthIndicator(strength[status.length - 1]) : setStrengthIndicator("too weak!")


        setPassword(generatePassword(charLength, options))
    }
    
    return (<SC.Container>
        <SC.Title>Password Generator</SC.Title>
        <PasswordForm password={password} handleGenerate={handleGenerate} strengthIndicator={strengthIndicator } />
    </SC.Container> );
}
 
export default PasswordGenerator;