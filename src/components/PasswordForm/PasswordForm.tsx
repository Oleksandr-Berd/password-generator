import { useFormik } from "formik";

import * as SC from "./PasswordFormStyled"

import optionsCheck from "dataBase/checkOptions.json"
import { ReactComponent as CopySvg } from "assets/images/icon-copy.svg"
import { ReactComponent as ArrowSvg } from "assets/images/icon-arrow-right.svg"

import path from "assets/images/Path 2.png"
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

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>):void => {
        evt.preventDefault()
        formik.handleSubmit(evt)
        
    }

    const position = Number((formik.values.charLength / formik.values.maxLength * 100).toFixed(2))



    return (<form onSubmit={handleSubmit}>
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
            <SC.CheckBox type='checkbox' id={`check-api-checkbox`}>
                {optionsCheck.map((el) => <SC.ChecksContainer key={el}>
                    <SC.CheckInput type='checkbox' isValid arrow={path} />
                    <SC.CheckText>{el}</SC.CheckText>
                </SC.ChecksContainer>
                )}
            </SC.CheckBox>
            <SC.StrengthContainer>
                <SC.StrengthTitle>strength</SC.StrengthTitle>
                <SC.StrengthIndicatorContainer>
                    <SC.StrengthIndicatorText>medium</SC.StrengthIndicatorText>
                    <SC.StrengthIndicatorItem></SC.StrengthIndicatorItem>
                    <SC.StrengthIndicatorItem></SC.StrengthIndicatorItem>
                    <SC.StrengthIndicatorItem></SC.StrengthIndicatorItem>
                    <SC.StrengthIndicatorItem></SC.StrengthIndicatorItem>
                </SC.StrengthIndicatorContainer>
            </SC.StrengthContainer>
            <SC.SubmitButton type="submit"><span>generate</span> <ArrowSvg /></SC.SubmitButton>
        </SC.OptionContainer>
    </form>);
}

export default PasswordForm;