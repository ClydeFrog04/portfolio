import React, {useEffect, useRef, useState} from "react";
import "./TypeWriter.css";

interface TypeWriterProps {
    phrases: string[];
    explodeOnPhrase?: string;
}

const TypeWriter = (props: TypeWriterProps) => {
    const TAG = "[TypeWriter.tsx]";
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [finalText, setFinalText] = useState(props.phrases[currentPhraseIndex]);
    const [doExplode, setDoExplode] = useState(false);

    const {phrases, explodeOnPhrase} = props;

    const timer = useRef<any>();//todo: need to figure out how to make NodeJS namespace available :3

    const sleep = (sleepTime: number) => {
        return new Promise((resolve) => {
            return setTimeout(resolve, sleepTime);
        });
    };

    const moveToNextPhrase = () => {
        const newIndex = (currentPhraseIndex + 1) % phrases.length;
        setFinalText(phrases[newIndex]);
        setCurrentPhraseIndex(() => {
            return newIndex;
        });
        setIsTyping(true);
    };

    const doTypeWriter = () => {
        timer.current = setTimeout(() => {
            if (explodeOnPhrase !== undefined && explodeOnPhrase === phrases[currentPhraseIndex]) {
                setDoExplode(true);
                setText(finalText);
                sleep(3000).then( (res) => {
                    setDoExplode(false);
                    setText("");
                    moveToNextPhrase();
                });
            } else {
                if (isTyping) {
                    if (text !== finalText) {
                        setText(finalText.slice(0, text.length + 1));
                    } else {
                        sleep(2000).then(() => {
                            setIsTyping(false);
                        });
                    }
                } else {
                    setText(finalText.slice(0, text.length - 1));
                    if (text.length <= 2) {

                        moveToNextPhrase();
                    }
                }
            }
        }, 100);
    };

    useEffect(() => {

        doTypeWriter();

        return () => {
            clearTimeout(timer.current);
        };
    }, [text, isTyping]);


    return (
        <div className={`typeWriter ${doExplode ? "explode" : ""}`.trimEnd()}>
            {text}
        </div>
    );
};

export default TypeWriter;
