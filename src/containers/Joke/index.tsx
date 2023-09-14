//libs
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useCookies } from 'react-cookie'
//components
import { JokeBodyStyled, JokeButtonReset, JokeContainerWrapStyled, JokeContentFinal, JokeContentStyled } from './styles'
import { IDataJoke } from '../../constants/dataJoke'
import JokeAction from './JokeAction'
//other

type Props = {
    dataJoke: IDataJoke[]
}

const JokeContainer: React.FC<Props> = ({ dataJoke }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [cookies, setCookie, removeCookie] = useCookies(['likedJokes', 'dislikedJokes']);

    // Load user votes from local storage on component mount
    useEffect(() => {
        const likedJokesStorage = localStorage.getItem('likedJokes');
        const dislikedJokesStorage = localStorage.getItem('dislikedJokes');

        if (likedJokesStorage) {
            setCookie('likedJokes', JSON.parse(likedJokesStorage), { path: '/' });
        }

        if (dislikedJokesStorage) {
            setCookie('dislikedJokes', JSON.parse(dislikedJokesStorage), { path: '/' });
        }
    }, []);

    const handleVote = (voteType: 'like' | 'dislike') => {
        if (currentIndex !== -1) {
            const votedJokesKey = voteType === 'like' ? 'likedJokes' : 'dislikedJokes';
            const votedJokes = cookies[votedJokesKey] || [];
            votedJokes.push(dataJoke[currentIndex].id);
            setCookie(votedJokesKey, votedJokes, { path: '/' });

            // Save user votes to local storage
            localStorage.setItem(votedJokesKey, JSON.stringify(votedJokes));

            // Show the next joke
            const nextIndex = currentIndex + 1;
            if (nextIndex < dataJoke.length) {
                setCurrentIndex(nextIndex);
            } else {
                // All jokes have been shown
                setCurrentIndex(-1);
            }
        }
    };

    const handleResetVote = () => {
        // Reset vote shown
        setCurrentIndex(0)
        localStorage.removeItem('likedJokes')
        localStorage.removeItem('dislikedJokes')
        removeCookie('likedJokes', { path: '/' })
        removeCookie('dislikedJokes', { path: '/' })
    }

    const renderJoke = useMemo(() => {
        if (currentIndex !== -1) {
            return (
                <>
                    <JokeContentStyled>{dataJoke[currentIndex].value}</JokeContentStyled>
                    <JokeAction dataJoke={dataJoke[currentIndex]} handleVote={handleVote} />
                </>
            )
        } else {
            return <>
                <JokeContentFinal>That's all the jokes for today! Come back another day!</JokeContentFinal>
                <JokeButtonReset onClick={handleResetVote}>
                    <button>
                        Reset
                    </button>
                </JokeButtonReset>
            </>
        }
    }, [dataJoke, currentIndex])

    return (
        <JokeContainerWrapStyled>
            <JokeBodyStyled className='container'>
                {renderJoke}
            </JokeBodyStyled>
        </JokeContainerWrapStyled>
    )
}

export default JokeContainer