import { useFormik } from "formik";

import * as SC from "./PasswordFormStyled"

import { ReactComponent as CopySvg } from "assets/images/icon-copy.svg"

interface IValues {
    password: string,
    charLength: number,
    maxLength: number,
}


const PasswordForm = (): JSX.Element => {

    const formik = useFormik<IValues>({
        initialValues: {
            password: "",
            charLength: 10,
            maxLength: 20,

        }, onSubmit: (values) => {
            console.log(values);
        }
    })

    const handleRangeChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt)

    }

    const position =Number((formik.values.charLength / formik.values.maxLength * 100).toFixed(2))

    

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
                <SC.Range name="charLength" min={0} max={20} onChange={handleRangeChange} position={position} />
            </div>
        </SC.OptionContainer>
    </form>);
}

export default PasswordForm;