//libs
import React from 'react'
//components
import { BannerBodyStyled, BannerContainerWrapStyled, BannerContentPrimaryStyled, BannerContentSecondaryStyled } from './styles'
//other

type Props = {}

const BannerContainer: React.FC<Props> = ({ }) => {
    return (
        <BannerContainerWrapStyled>
            <BannerBodyStyled className='container'>
                <BannerContentPrimaryStyled>A joke a day keeps the doctor away</BannerContentPrimaryStyled>
                <BannerContentSecondaryStyled>If you joke wrong way. your teeth have to pay. (Serious)</BannerContentSecondaryStyled>
            </BannerBodyStyled>
        </BannerContainerWrapStyled>
    )
}

export default BannerContainer