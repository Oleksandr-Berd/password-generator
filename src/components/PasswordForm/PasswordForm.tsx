import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";

import * as SC from "./PasswordFormStyled"

import optionsCheck from "dataBase/checkOptions.json"
import { ReactComponent as CopySvg } from "assets/images/icon-copy.svg"
import { ReactComponent as ArrowSvg } from "assets/images/icon-arrow-right.svg"

import path from "assets/images/Path 2.png"
import { useState } from "react";

interface IProps {
    password: string,
    handleGenerate: Function,
    strengthIndicator: string,
}
interface IValues {
    charLength: number,
    maxLength: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
    arrayIndicators: boolean[],
    [key: string]: boolean | number | boolean[];
}


const PasswordForm = ({ password, handleGenerate, strengthIndicator }: IProps): JSX.Element => {

    const [isTemplate, setIsTemplate] = useState<boolean>(false)

    const formic = useFormik<IValues>({
        initialValues: {
            charLength: 10,
            maxLength: 20,
            uppercase: false,
            lowercase: false,
            numbers: false,
            symbols: false,
            arrayIndicators: [],
        }, onSubmit: (values) => {
            formic.setValues((values) => ({
                ...values,
                uppercase: false,
                lowercase: false,
                numbers: false,
                symbols: false,
                arrayIndicators: [],
            }));

            if (values.uppercase) values.arrayIndicators.push(values.uppercase)
            if (values.lowercase) values.arrayIndicators.push(values.lowercase)
            if (values.numbers) values.arrayIndicators.push(values.numbers)
            if (values.symbols) values.arrayIndicators.push(values.symbols)

            const status = values.arrayIndicators;
            const objectIndicators = { uppercase: values.uppercase, lowercase: values.lowercase, numbers: values.numbers, symbols: values.symbols }

            handleGenerate(status, values.charLength, objectIndicators)


        }
    })



    const handleRangeChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formic.handleChange(evt)

    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
        evt.preventDefault()
        setIsTemplate(false)
        formic.handleSubmit(evt)


    }

    const handleCheckChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formic.handleChange(evt)

    }

    const handleCopyPassword = () => {

        if (password !== "") {
            navigator.clipboard.writeText(password);

            toast.success(`🦄 The password copied to clipboard: ${password}!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setIsTemplate(true)
        } else {
            toast.error(`Please, generate your password!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    };

    const position = Number((formic.values.charLength / formic.values.maxLength * 100).toFixed(2))


    return (<form onSubmit={handleSubmit}>
        <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" />
        <SC.DisplayContainer>
            <SC.Display type="text" value={password !== "" ? password : "P4$5W0rD!"} disabled style={password === "" ? { color: "#817D92" } : undefined} />
            <SC.CopyContainer>
                {isTemplate ? <SC.Copied>copied</SC.Copied> : null}
                <SC.CopyButton type="button" onClick={handleCopyPassword}><CopySvg /></SC.CopyButton>
            </SC.CopyContainer>
        </SC.DisplayContainer>
        <SC.OptionContainer>
            <div>
                <SC.RangeIndicatorContainer>
                    <SC.RangeTitle>Character Length</SC.RangeTitle>
                    <SC.RangeIndicator>{formic.values.charLength}</SC.RangeIndicator>
                </SC.RangeIndicatorContainer>
                <SC.Range name="charLength" min={0} max={20} onChange={handleRangeChange} position={position} />
            </div>
            <SC.CheckBox type='checkbox' id={`check-api-checkbox`}>
                {optionsCheck.map((el) => {
                    const indicator = el.split(" ")[1].toLowerCase()
                    return <SC.ChecksContainer key={el}>
                        <SC.CheckInput type='checkbox' isValid arrow={path} name={indicator} onChange={handleCheckChange} checked={formic.values[indicator]} />
                        <SC.CheckText>{el}</SC.CheckText>
                    </SC.ChecksContainer>
                }

                )}
            </SC.CheckBox>
            <SC.StrengthContainer>
                <SC.StrengthTitle>strength</SC.StrengthTitle>
                <SC.StrengthIndicatorContainer>
                    <SC.StrengthIndicatorText>{strengthIndicator}</SC.StrengthIndicatorText>
                    <SC.StrengthIndicatorItem active={strengthIndicator !== "" ? "true" : undefined} status_color={strengthIndicator}
                    ></SC.StrengthIndicatorItem>
                    <SC.StrengthIndicatorItem active={strengthIndicator !== "" && strengthIndicator !== "too weak!" ? "true" : undefined} status_color={strengthIndicator}></SC.StrengthIndicatorItem>
                    <SC.StrengthIndicatorItem active={strengthIndicator === "medium" || strengthIndicator === "strong" ? "true" : undefined} status_color={strengthIndicator}></SC.StrengthIndicatorItem>
                    <SC.StrengthIndicatorItem active={strengthIndicator === "strong" ? "true" : undefined} status_color={strengthIndicator}></SC.StrengthIndicatorItem>
                </SC.StrengthIndicatorContainer>
            </SC.StrengthContainer>
            <SC.SubmitButton type="submit"><span>generate</span> <ArrowSvg /></SC.SubmitButton>
        </SC.OptionContainer>
    </form>);
}

export default PasswordForm;

// status = { formic.values.arrayIndicators.length > 0 ? formic.values.arrayIndicators.length : null }