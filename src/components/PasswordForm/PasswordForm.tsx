import { useFormik } from "formik";
import Form from 'react-bootstrap/Form';

import * as SC from "./PasswordFormStyled"

import { ReactComponent as CopySvg } from "assets/images/icon-copy.svg"

interface IValues {
    password: string,
    charLength: number,
}


const PasswordForm = (): JSX.Element => {

    const formik = useFormik<IValues>({
        initialValues: {
            password: "",
            charLength: 10,
        }, onSubmit: (values) => {
            console.log(values);
        }
    })

    const handleRangeChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt)
    }

    return (<form>
        <SC.DisplayContainer>
            <SC.Display type="text" value={formik.values.password} disabled />
            <SC.CopyButton><CopySvg /></SC.CopyButton>
        </SC.DisplayContainer>
        <SC.OptionContainer>
            <div>
                <SC.RangeIndicatorContainer>
                    <SC.RangeTitle>Character Length</SC.RangeTitle>
                    <SC.RangeIndicator>{formik.values.charLength}</SC.RangeIndicator>
                </SC.RangeIndicatorContainer>
                <Form.Range name="charLength" max={20} onChange={handleRangeChange} />
            </div>
        </SC.OptionContainer>
    </form>);
}

export default PasswordForm;