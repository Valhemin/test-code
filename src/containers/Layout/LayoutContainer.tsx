//libs
import React, { ReactNode, useMemo } from 'react'
//components
import HeaderContainer from './Header';
import FooterContainer from './Footer';

type Props = {
    children: ReactNode
}

const LayoutContainer: React.FC<Props> = ({ children }) => {
    const renderMain = useMemo(() => <section className="c-main">{children}</section>, [children]);
    return (
        <>
            <HeaderContainer />
            {renderMain}
            <FooterContainer />
        </>
    )
}

export default LayoutContainer