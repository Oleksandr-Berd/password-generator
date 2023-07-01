import PasswordForm from "components/PasswordForm/PasswordForm";
import * as SC from "./PasswordGeneratorStyled"

const PasswordGenerator = (): JSX.Element => {
    return (<SC.Container>
        <SC.Title>Password Generator</SC.Title>
        <PasswordForm/>
    </SC.Container> );
}
 
export default PasswordGenerator;