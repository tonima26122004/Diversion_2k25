import React, { useState, useEffect, useRef } from "react";

const AnimatedInputBox = ({
    addQuery,
    getans,
    setque,
    que,
    setIsQuerySubmitted,
    setIsInputMoved
}) => {
    const [image, setImage] = useState(null);
    const [isListening, setIsListening] = useState(false);
    const [voice, setVoice] = useState(false);
    const [recognitionInstance, setRecognitionInstance] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showAbove, setShowAbove] = useState(false);
    const inputRef = useRef(null);
    const [count, setcount] = useState(0);

    const articlewords = [
        "Article 1",
       'Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5', 
    'Article 6', 'Article 7', 'Article 8', 'Article 9', 'Article 10', 
    'Article 15', 'Article 19', 'Article 21', 'Article 32', 'Article 44', 
    'Article 51A', 'Article 124', 'Article 141', 'Article 226', 'Article 300A',

    'Right to Equality', 'Right to Freedom', 'Right to Education', 'Right Against Exploitation', 
    'Right to Freedom of Religion', 'Cultural and Educational Rights', 'Right to Constitutional Remedies', 
    'Fundamental Rights', 'Fundamental Duties', 'Directive Principles of State Policy',

    'Constitutional Law', 'Criminal Law', 'Civil Law', 'Cyber Law', 'Human Rights Law', 
    'Intellectual Property Law', 'Consumer Protection Act', 'Labor Laws', 'Contract Law', 
    'Corporate Law', 'Environmental Law', 'Property Law', 'Defamation Law', 'Tort Law', 
    'Inheritance Law', 'Anti-Terrorism Laws', 'Extradition Law', 

    'Traffic Laws', 'Speed Limits', 'Drunk Driving', 'Road Safety Rules', 'Helmet Rules', 
    'Seat Belt Laws', 'No Parking Zones', 'Traffic', 'Traffic Signals', 'Hit and Run Law', 
    'Driving License Rules', 'Overloading Rules', 'Vehicle Insurance Law', 'Penalty for Rash Driving', 
    'Jaywalking Laws', 'Toll Tax Rules', 'Wrong Side Driving Penalty', 'Red Light Jump Fine',

    'Information Technology Act', 'Online Fraud Laws', 'Cyberbullying Laws', 'Social Media Regulations', 
    'Data Privacy Laws', 'Electronic Signature Law', 'Hacking and Cyber Crimes',

    'Land Acquisition Act', 'Real Estate Regulation Act', 'Rent Control Laws',
    'Business Registration Laws', 'Banking and Finance Laws', 'Taxation Laws',

    'Minimum Wage Law', 'Workplace Harassment Laws', 'Maternity Leave Laws',
    'Child Labor Laws', 'Factory Act', 'Industrial Dispute Act', 'Trade Union Laws',

    'Marriage and Divorce Law', 'Child Adoption Laws', 'Domestic Violence Laws',
    'Sexual Harassment at Workplace Act', 'Dowry Prohibition Act', 'Juvenile Justice Act',

    'Election Laws', 'Foreign Exchange Regulation Act', 'RTI Act', 'Public Interest Litigation',
    'Legal Aid and Justice', 'Consumer Rights and Protection', 'Prohibition of Child Marriage Act',
    'Wildlife Protection Act', 'Forest Conservation Laws', 'Pollution Control Laws',

    'What is the Right to Equality?', 'What is the Right to Freedom?', 'What is Article 21?', 
    'What is Intellectual Property Law?', 'What is Cyber Law?', 'What is Road Safety Law?', 
    'What is the penalty for drunk driving?', 'What is the punishment for defamation?', 
    'What is the process of filing an FIR?', 'What is the legal drinking age in India?', 
    'What is the punishment for domestic violence?', 'What is the law on child labor in India?', 
    'What is the punishment for hit and run cases?', 'What is the difference between civil and criminal law?', 
    'What is considered workplace harassment?', 'What is the punishment for data theft?', 
    'What is a constitutional remedy?', 'What is the legal process for marriage registration?', 
    'What is the punishment for cybercrime?', 'What is the role of the Supreme Court in India?', 
    'What is an RTI application?', 'What is the law on social media privacy?', 
    'What is the punishment for violating environmental laws?', 'What is considered insider trading?', 
    'What is the punishment for spreading fake news?', 'What is the punishment for online fraud?', 
    'What is the penalty for tax evasion?', 'What is the punishment for bribery and corruption?', 
    'What is the punishment for workplace discrimination?', 'What is the punishment for violating labor laws?', 
    'What is considered an unfair trade practice?', 'What is a PIL (Public Interest Litigation)?', 
    'What is the punishment for breaking a rental agreement?', 'What is the punishment for violating election laws?', 
    'What is the legal process for adoption?', 'What is the process for legally changing my name?', 
    'What is the punishment for illegal land acquisition?', 'What is the legal age to vote in India?', 
    'What is the punishment for spreading false information?', 'What is the law on digital signatures?', 
    'What is the punishment for spreading hate speech online?', 'What is considered an environmental violation?', 
    'What is considered tax fraud?', 'What is the punishment for corporate fraud?', 
    'What is the punishment for sexual harassment at the workplace?', 'What is considered fair use in copyright laws?', 
    'What is the law on human trafficking?', 'What is the punishment for identity theft?', 
    'What is the punishment for violating banking laws?', 'What is considered white-collar crime?', 
    'What is the punishment for violating aviation laws?', 'What is the punishment for smuggling?', 
    'What is the punishment for drug trafficking?', 'What is the punishment for animal cruelty?', 
    'What is the punishment for domestic abuse?', 'What is the punishment for breaching a contract?', 
    'What is the punishment for data privacy violations?', 'What is the punishment for leaking government secrets?', 
    'What is the punishment for plagiarism?', 'What is the punishment for stock market manipulation?', 
    'What is considered an act of terrorism?', 'What is the punishment for espionage?', 
    'What is the punishment for illegal arms possession?', 'What is the punishment for illegal surveillance?', 
    'What is Article 1?',
    'What is Article 2?',
    'What is Article 3?',
    'What is Article 4?',
    'What is Article 5?',
    'What is Article 6?',
    'What is Article 7?',
    'What is Article 8?',
    'What is Article 9?',
    'What is Article 10?',
    'What is Article 11?',
    'What is Article 12?',
    'What is Article 13?',
    'What is Article 14?',
    'What is Article 15?',
    'What is Article 16?',
    'What is Article 17?',

    'When can police arrest without a warrant?', 'When is it legal to record a phone call?', 
    'When can I file for a divorce?', 'When do I need a lawyer?', 'When can a minor be tried as an adult?', 
    'When should I file a cybercrime complaint?', 'When is it legal to carry a weapon?', 
    'When can I refuse a police search?', 'When is defamation considered a criminal offense?', 
    'When should I report workplace harassment?', 'When can I file for whistleblower protection?', 
    'When can I challenge a traffic fine?', 'When should I hire a tax lawyer?', 
    'When can I be denied bail?', 'When can a business be shut down for legal reasons?', 
    'When can I sue for medical malpractice?', 'When can the government seize private property?', 
    'When is online speech considered illegal?', 'When should I report financial fraud?', 
    'When is an NDA legally binding?', 'When should I consult a human rights lawyer?', 
    'When can the police search my house?', 'When can I request a restraining order?', 
    'When is political protest legal?', 'When should I file a PIL?', 
    'When can I appeal a court decision?', 'When should I hire a property lawyer?'
    ];

    const generateNGramSuggestions = (input, words) => {
        if (!input) return [];
        const inputLower = input.toLowerCase();
        return words.filter(word => word.toLowerCase().includes(inputLower)).slice(0, 5);
    };

    const handleInputChange = e => {
        const value = e.target.value;
        setque(value);
        const newSuggestions = generateNGramSuggestions(value, articlewords);
        setSuggestions(newSuggestions);

        // Adjust dropdown position
        adjustDropdownPosition();
    };

    const handleSuggestionClick = suggestion => {
        setque(suggestion);
        setSuggestions([]);
    };

    useEffect(() => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";
        recognition.interimResults = false;

        recognition.onresult = event => {
            const ans = event.results[0][0].transcript;
            setque(ans);
            setIsListening(false);
            setVoice(false);
        };

        recognition.onerror = event => {
            console.error("Speech Recognition Error:", event.error);
            setIsListening(false);
            setVoice(false);
        };

        recognition.onend = () => {
            setIsListening(false);
            setVoice(false);
            getans();
            setIsQuerySubmitted(true);
            setIsInputMoved(true);
        };

        setRecognitionInstance(recognition);
    }, [setque, getans, setIsQuerySubmitted, setIsInputMoved]);

    const handleImageUpload = e => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleVoice = () => {
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

    const handleKeyDown = e => {
        if (e.key === "Enter") {
            getans();
            setIsQuerySubmitted(true);
            setIsInputMoved(true);
        }
    };

    const adjustDropdownPosition = () => {
        if (inputRef.current) {
            const rect = inputRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            setShowAbove(rect.bottom > viewportHeight * 0.75);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", adjustDropdownPosition);
        return () => window.removeEventListener("resize", adjustDropdownPosition);
    }, []);

    return (
        <div className="relative w-full">
            <input
                ref={inputRef}
                type="text"
                value={que}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter Your Query here"
                className="px-4 py-2 border-2 font-libra bg-[#E4E2D6] outline-0 border-[#766C40] rounded-md w-full pr-36"
            />

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
                <div
                className={`absolute left-0 w-full bg-[#E4E2D6] border border-[#766C40] rounded-md shadow-lg z-10 ${
                    showAbove ? "bottom-full mb-2" : "top-full mt-1"
                }`}
            >
                {suggestions.map((suggestion, index) => (
                    <div
                        key={index}
                        className="p-2 hover:bg-[#79745c] hover:text-white cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion)}
                    >
                        {suggestion}
                    </div>
                ))}
            </div>
            
            )}

            {/* Buttons for upload, voice, and send */}
            <div className="absolute inset-y-0 right-0 flex items-center gap-4">
                <input type="file" onChange={handleImageUpload} className="hidden" id="image-upload" />
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
                        setcount(count + 1);
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
