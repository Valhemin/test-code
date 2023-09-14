//libs
import React from 'react'
//components
import CLogo from '../../../../components/CLogo'
import { HeaderProfileContentStyled, HeaderProfileLogoStyled, HeaderProfileTextPrimaryStyled, HeaderProfileTextSecondaryStyled, HeaderProfileWrapStyled } from './styles'
//other
import { IDataProfile } from '../../../../constants/dataProfile'

type Props = {
    data: IDataProfile
}


const HeaderProfile: React.FC<Props> = ({ data }) => {
    return (
        <HeaderProfileWrapStyled>
            <HeaderProfileContentStyled>
                <HeaderProfileTextPrimaryStyled><i>{data.label}</i></HeaderProfileTextPrimaryStyled>
                <HeaderProfileTextSecondaryStyled>{data.name}</HeaderProfileTextSecondaryStyled>
            </HeaderProfileContentStyled>
            <HeaderProfileLogoStyled>
                <CLogo width={70} height={70} src={data.avt} alt={data.name} />
            </HeaderProfileLogoStyled>
        </HeaderProfileWrapStyled>
    )
}

export default HeaderProfile