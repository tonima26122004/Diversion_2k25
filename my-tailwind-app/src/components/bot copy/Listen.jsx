import React from "react";

const Listen = ({ ans }) => {
  const generateSpeech = async () => {
    if (!ans || !Array.isArray(ans) || ans.length === 0 || !ans[0]?.bot) {
      console.error("Invalid or empty answer:", ans);
      return;
    }

    const text = ans[0].bot.trim();

    try {
      const response = await fetch("https://98a1-2409-40e0-2c-1348-a18e-36e1-ede4-9d91.ngrok-free.app/generate-speech", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio");
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();

    } catch (error) {
      console.error("Error generating speech:", error);
    }
  };

  return (
    <div>
      <button
        onClick={generateSpeech}
        className="flex items-center gap-3 text-lg font-semibold border-2 border-black p-1 rounded-lg"
      >
        <img className="w-[24px]" src="listen.svg" alt="" />
        Listen Outcome
      </button>
    </div>
  );
};

export default Listen;