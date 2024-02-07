import React, { useState, useRef, useEffect } from "react";
import Button from "../Button";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import logo from "../../assets/images.png"

const Player = ({ audio, allmusicdata }) => {
  const [audioarray, setaudioarray] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(null);
  const [currentAudiodata, setcurrentAudiodata] = useState(null);
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setaudioarray(allmusicdata);
    if (
      typeof audio === "number" &&
      audio >= 0 &&
      audio < allmusicdata.length
    ) {
      setCurrentAudioIndex(audio);
    }
    if (currentAudioIndex == null) {
      setIsPlaying(false);
    }
  }, [audio, allmusicdata]);

  useEffect(() => {
    if (currentAudioIndex !== null && currentAudioIndex < audioarray.length) {
      setcurrentAudiodata(audioarray[currentAudioIndex]);
    }
  }, [currentAudioIndex]);

  useEffect(() => {
    if (currentAudiodata !== null) {
      setIsPlaying(true);
      audioRef.current.src = currentAudiodata.audioData;
      audioRef.current.play();
    }
  }, [currentAudiodata]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (audioRef.current) {
        handleNext();
      }
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("ended", handleEnded);
  }, [currentAudioIndex, audioarray]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handlePlayPause = () => {
    if (audioarray!=[]) {
      if (currentAudioIndex === null) {
        setCurrentAudioIndex(0);
      } else {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying((prevState) => !prevState);
      }
    }

  };
  const handlePrevious = () => {
    if (currentAudioIndex - 1 < 0) {
    } else {
      setCurrentAudioIndex(currentAudioIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentAudioIndex + 1 >= audioarray.length) {
      setCurrentAudioIndex(0);
    } else {
      setCurrentAudioIndex(currentAudioIndex + 1);
    }
  };
  const handleRangeChange = (event) => {
    const time = parseFloat(event.target.value);
    audioRef.current.currentTime = time;
  };
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <section className="player bg-dark text-light p-3 d-flex justify-content-between ">
      <div className="col-3  overflow-hidden">
  {currentAudiodata == null ? (
    ""
  ) : (
    <div className="d-flex justify-content-evenly align-items-center">
      <img
        src={currentAudiodata.audioimg == "" ? logo : currentAudiodata.audioimg}
        alt=""
        className="playershowingimg"
      />
      <div className="playershowingtext">
        <p className="mx-1 text-break h-auto">
          {currentAudiodata == null ? "" : currentAudiodata.name}
        </p>
      </div>
    </div>
  )}
</div>

      <div className="col-6 buttonholderinmusic">
        <div className=" d-flex justify-content-between mx-auto">
          <Button
            className="playbutton"
            text={<TbPlayerSkipBackFilled />}
            onClick={handlePrevious}
          />
          <Button
            className="playbutton"
            text={isPlaying ? <CiPause1 /> : <CiPlay1 />}
            onClick={handlePlayPause}
          />
          <Button
            className="playbutton"
            text={<TbPlayerSkipForwardFilled />}
            onClick={handleNext}
          />
        </div>
        <div className=" mx-auto d-flex  justify-content-between align-items-center mt-3">
          <audio
            ref={audioRef}
            type="audio/mpeg"
            onLoadedMetadata={handleLoadedMetadata}
          />
          <span className="bg-dark m-1 text-light">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            name=""
            id=""
            min={0}
            max={duration}
            step={0.01}
            value={currentTime}
            onChange={handleRangeChange}
          />
          <span className="bg-dark m-1 text-light">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="col-3"></div>
    </section>
  );
};

export default Player;
