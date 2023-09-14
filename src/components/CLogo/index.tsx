import React from 'react'
import { LogoImageStyled, LogoWrapStyled } from './styles'

type Props = {
    width: number
    height: number
    src?: string
    alt?: string
    handleClick?: () => void
    styles?: React.CSSProperties
}

const CLogo: React.FC<Props> = ({ width, height, src, alt = 'Logo', handleClick, styles }) => {
    return (
        <LogoWrapStyled onClick={handleClick} style={styles}>
            <LogoImageStyled width={width} height={height} src={src || ''} alt={alt} />
        </LogoWrapStyled>
    )
}

export default CLogo