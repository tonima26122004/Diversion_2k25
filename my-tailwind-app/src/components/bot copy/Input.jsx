import React, { useState, useEffect } from 'react';

const AnimatedInputBox = ({ addQuery, getans, setque, que, setIsQuerySubmitted, setIsInputMoved }) => {
    const [inputValue, setInputValue] = useState('');
    const [image, setImage] = useState(null);
    const [isListening, setIsListening] = useState(false);
    const [voice, setVoice] = useState(false);
    const [recognitionInstance, setRecognitionInstance] = useState(null);

    useEffect(() => {
       

        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const ans = event.results[0][0].transcript;
            setque(ans);
            setIsListening(false);
            setVoice(false);
        };

        // recognition.onstart = () => {
        //     console.log('Voice recognition started.');
        //     setIsListening(true);
        // };

        // recognition.onerror = (event) => {
        //     console.error('Speech Recognition Error:', event.error);
        //     setIsListening(false);
        //     setVoice(false);
        // };

        // recognition.onend = () => {
        //     console.log('Voice recognition ended.');
        //     setIsListening(false);
        //     setVoice(false);
        //     getans();
        //     setIsQuerySubmitted(true);
        //     setIsInputMoved(true);
        // };

        setRecognitionInstance(recognition);
    }, [setque]);

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
        setVoice(true);
        recognitionInstance && recognitionInstance.start();
    };

    const stopSpeechRecognition = () => {
        if (recognitionInstance) {
            recognitionInstance.stop();
            setVoice(false);
            setIsListening(false);
            
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            getans();
            setIsQuerySubmitted(true);
            setIsInputMoved(true);
        }
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                value={que}
                onChange={(e) => setque(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter Your Query here"
                className="px-4 py-2 border-2 font-libra bg-transparent outline-0 border-[#766C40] rounded-md w-full pr-36"
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
                {!voice ? (
                    <button onClick={handleVoice} className="py-1">
                        <img className="w-4" src="Mic_2.svg" alt="Voice" />
                    </button>
                ) : (
                    <button onClick={stopSpeechRecognition} className="py-1">
                        <img className="w-4" src="Mic_1.svg" alt="Voice" />
                    </button>
                )}
                <button
                    onClick={() => {
                        getans();
                        setIsQuerySubmitted(true);
                        setIsInputMoved(true);
                    }}
                    className="py-2 bg-[#766C40] rounded-md px-2"
                >
                    <img className="w-6" src="send.svg" alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default AnimatedInputBox;
