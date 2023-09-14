import React from 'react'
import { IDataJoke } from '../../../constants/dataJoke'
import { JokeActionStyled, JokeActionWrapStyled, JokeButtonLikeStyled, JokeButtonDislikeStyled } from './styles'

type Props = {
    dataJoke: IDataJoke
    handleVote: (voteType: 'like' | 'dislike') => void
}

const JokeAction: React.FC<Props> = ({ dataJoke, handleVote }) => {

    const handleClickButtonLike = () => {
        handleVote('like')

    }
    const handleClickButtonDislike = () => {
        handleVote('dislike')
    }

    return (
        <JokeActionWrapStyled>
            <JokeActionStyled>
                <JokeButtonLikeStyled onClick={handleClickButtonLike}>
                    This is Funny!
                </JokeButtonLikeStyled>
                <JokeButtonDislikeStyled onClick={handleClickButtonDislike}>
                    This is not Funny!
                </JokeButtonDislikeStyled>
            </JokeActionStyled>
        </JokeActionWrapStyled>
    )
}

export default JokeAction