import React, { useEffect, useRef, useState } from "react";

const CustomYouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null); // Reference for the YouTube player container
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);

        // Define the global callback for the YouTube API
        window.onYouTubeIframeAPIReady = () => initializePlayer();
      } else {
        initializePlayer();
      }
    };

    const initializePlayer = () => {
      if (playerRef.current) {
        const newPlayer = new window.YT.Player(playerRef.current, {
          videoId, // Dynamically set the videoId prop
          events: {
            onReady: (event) => {
              setPlayer(event.target);
              setDuration(event.target.getDuration());
            },
            onStateChange: (event) => {
              setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
              if (event.data === window.YT.PlayerState.ENDED) {
                setProgress(100); // Set progress to 100% when the video ends
                setIsPlaying(false);
              }
            },
          },
        });
      }
    };

    loadYouTubeAPI();
  }, [videoId]);

  // Update progress and current time
  useEffect(() => {
    let interval;
    if (player && isPlaying) {
      interval = setInterval(() => {
        const current = player.getCurrentTime();
        const totalDuration = player.getDuration();
        setCurrentTime(current);
        setProgress((current / totalDuration) * 100);
      }, 500);
    }

    return () => clearInterval(interval);
  }, [player, isPlaying]);

  const playVideo = () => player && player.playVideo();
  const pauseVideo = () => player && player.pauseVideo();
  const seekVideo = (event) => {
    if (player) {
      const newTime = (event.target.value / 100) * player.getDuration();
      setCurrentTime(newTime); // Optimistically update the currentTime
      setProgress(event.target.value); // Optimistically update the progress bar
      player.seekTo(newTime, true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center p-4 rounded-lg space-y-4">
      {/* Video Container */}
      <div className="w-full max-w-2xl aspect-video mt-6">
        <div ref={playerRef}></div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-xl flex items-center">
        <span className="text-sm">{formatTime(currentTime)}</span>
        <input
          type="range"
          className="flex-grow mx-4"
          value={progress}
          onChange={seekVideo}
        />
        <span className="text-sm">{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-6">
        <button
          onClick={() => player && player.seekTo(player.getCurrentTime() - 10, true)}
          className=""
        >
          <img src="vl.svg" alt="Rewind" />
        </button>
        {isPlaying ? (
          <button
            onClick={pauseVideo}
            className="p-3"
          >
            <img src="pause.svg" alt="Pause" />
          </button>
        ) : (
          <button
            onClick={playVideo}
            className="p-3"
          >
            <img src="play.svg" alt="Play" />
          </button>
        )}
        <button
          onClick={() => player && player.seekTo(player.getCurrentTime() + 10, true)}
          className=""
        >
          <img src="vr.svg" alt="Forward" />
        </button>
      </div>
    </div>
  );
};

export default CustomYouTubePlayer;
