//libs
import React from 'react'
//components
import { FooterBodyStyled, FooterContainerWrapStyled, FooterCopyrightStyled, FooterTextStyled } from './styles'
//other
import { IFooter } from './type'


const FooterContainer: React.FC<IFooter> = ({ }) => {
    const dataText = 'This website is created as part Of Hlsolutions program. The materials contained on this website are provided for general information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.'
    return (
        <FooterContainerWrapStyled>
            <FooterBodyStyled className='container'>
                <FooterTextStyled>{dataText}</FooterTextStyled>
                <FooterCopyrightStyled>
                    Copyright 2021 HLS
                </FooterCopyrightStyled>
            </FooterBodyStyled>
        </FooterContainerWrapStyled>
    )
}

export default FooterContainer