import React, { useState } from 'react';

const AnimatedInputBox = ({ addQuery }) => {
    const [inputValue, setInputValue] = useState('');
    const [image, setImage] = useState(null); 
    const [isListening, setIsListening] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            console.log('Input Value:', inputValue);
            addQuery(inputValue); 
            setInputValue(''); 
        }
        if (image) {
            console.log('Uploaded Image:', image);
        } else {
            console.log('No Image Uploaded');
        }
    };

    const handleVoice = () => {
        console.log('Voice button clicked.');

        if (!('webkitSpeechRecognition' in window)) {
            alert('Speech recognition is not supported by this browser.');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onstart = () => {
            console.log('Voice recognition started.');
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            const speech = event.results[0][0].transcript;
            console.log('Speech recognized:', speech);
            setInputValue(speech);
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error('Speech Recognition Error:', event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            console.log('Voice recognition ended.');
            setIsListening(false);
        };

        recognition.start();
    };

    return (
        <div className="relative w-full  ">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="What are the legal consequences of violating traffic rules?"
                className="px-4 py-2 border-2 font-libra bg-transparent outline-0 border-[#766C40] rounded-md w-full  pr-36"
            />

            <div className="absolute inset-y-0 right-0 flex items-center gap-4">
                <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                />
                <label htmlFor="image-upload" className="py-1 rounded-md cursor-pointer">
                    <img className="w-6" src="upload.svg" alt="Upload" />
                </label>

                <button onClick={handleVoice} className="py-1">
                    <img className="w-6" src="voice.svg" alt="Voice" />
                </button>

                <button onClick={handleSubmit} className="py-2 bg-[#766C40] rounded-md px-2">
                    <img className="w-6" src="send.svg" alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default AnimatedInputBox;