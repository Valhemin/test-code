//libs
import React from "react";
//components
import { HomeBannerWrapStyled, HomeContainerWrapStyled } from "./styles";
import BannerContainer from "../Banner";
import JokeContainer from "../Joke";
//other
import { dataJoke } from "../../constants/dataJoke";

type Props = {};

const HomeContainer: React.FC<Props> = ({ }) => {
    return <HomeContainerWrapStyled>
        <HomeBannerWrapStyled>
            <BannerContainer />
        </HomeBannerWrapStyled>
        <JokeContainer dataJoke={dataJoke} />
    </HomeContainerWrapStyled>;
};

export default HomeContainer;
