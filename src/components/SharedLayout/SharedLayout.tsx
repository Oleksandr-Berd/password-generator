import  { ReactNode } from 'react';

import * as SC from "./SharedLayoutStyled"

interface IProps {
    children: ReactNode
}

const SharedLayout = ({ children }: IProps): JSX.Element => {
    return (<SC.SharedLayoutStyled>{children}</SC.SharedLayoutStyled> );
}
 
export default SharedLayout;