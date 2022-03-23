import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Detail() {
    const { id } = useParams();
    const [ movie, setMovie ] = useState()

    useEffect(() =>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if (doc.exists){
                setMovie(doc.data());
            } else {
                //redirect
            }
        })
    }, [])

    //console.log("This movie: ", movie.backgroundImg);

    return (
      <Container>
        {movie && (
          <>
            <Background>
              <img src={movie.backgroundImg} />
            </Background>
            <ImageTitle>
              <img src={movie.titleImg} />
            </ImageTitle>
            <ImaxText>
              {movie.isImax}
            </ImaxText>
            <Specs>
              <AgeRating img src={movie.ageImg}/>
              <ImaxImage img src={movie.imaxImg}/>
              <SubTitle>{movie.subTitle}</SubTitle>
            </Specs>
            <Genres>
              {movie.genres}
            </Genres>
            
            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src="/images/play-icon-white.png" />
                <span>TRAILER</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupWatchButton>
                <img src="/images/group-icon.png" />
              </GroupWatchButton>
            </Controls>
            <Description>{movie.description}</Description>
          </>
        )}
      </Container>
    );
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
`

const Background = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    min-height: 170px;
    min-width: 200px;
    height: 30vh;
    width: 35vw;
    margin-top: 60px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display:flex;
    align-items: center;
    margin-top: 25px;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb (249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: 250ms;
    font-family: Roboto;
    font-weight: 900;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    &:hover{
      color: rgb(0, 0, 0);
    }
`

const AddButton = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: 250ms;

    &:hover {
      background: rgb(198, 198, 198) 
    }

    span {
        font-size: 30px;
        color: white;

        &:hover{
          font-size: 40px;
          color: rgb(0, 0, 0);
        }
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
    text-shadow: 1px 2px 1px #5B5B5B;
    font-family: Roboto;
    font-weight: 300;
`

const ImaxText = styled.div`
    color: #ffb63f;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 900;
`

const Specs = styled.div`
    margin-top: 10px;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-weight: 300;
`

const AgeRating = styled.img`
    height: 20px;
    margin-right: 10px;
`

const ImaxImage = styled.img`
    height: 20px;
    margin-right: 10px;
`

const Genres = styled.div`
    font-size: 12px;
    margin-bottom: 40px;
    font-family: Roboto;
    font-weight: 300;
`