import { Component, createElement } from "react";
import TypewriterEffect from "typewriter-effect";
import { TextListType } from "../typings/TypewriterProps";

export interface InputProps {
    renderMode: string;
    loop: boolean;
    delay: number;
    deleteSpeed: number;
    cursor: string;
    textList: TextListType[];
}

export default class Typewriter extends Component<InputProps> {
    render() {
        const texts: any[] = [];
        this.props.textList.forEach(element => {
            texts.push(element.text.value);
        });
        return (
            <span className={this.props.renderMode}>
                <TypewriterEffect
                    options={{
                        strings: texts,
                        autoStart: true,
                        loop: this.props.loop,
                        delay: this.props.delay !== 0 ? this.props.delay : "natural",
                        deleteSpeed: this.props.deleteSpeed !== 0 ? this.props.deleteSpeed : "natural",
                        cursor: this.props.cursor
                    }}
                />
            </span>
        );
    }
}
