//libs
import React from 'react'
//components
import CLogo from '../../../components/CLogo'
import HeaderProfile from './HeaderProfile'
//other
import logo from '../../../assets/logo/logo.png'
import { dataProfile } from '../../../constants/dataProfile'
import { HeaderContainerBodyStyled, HeaderContainerWrapStyled } from './styles'
import { IHeader } from './type'

const HeaderContainer: React.FC<IHeader> = ({ }) => {
    return (
        <HeaderContainerWrapStyled >
            <HeaderContainerBodyStyled className='container'>
                <CLogo width={50} height={50} src={logo} />
                <HeaderProfile data={dataProfile} />
            </HeaderContainerBodyStyled>
        </HeaderContainerWrapStyled>
    )
}

export default HeaderContainer