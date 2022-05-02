import { Dispatch, FormEvent, FormEventHandler, SetStateAction } from "react";

export default function FormatInput({
    label,
    base,
    decimalState,
    setDecimalState,
}: {
    label: string;
    base: number;
    decimalState: number;
    setDecimalState: Dispatch<SetStateAction<number>>;
}) {
    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        let inputValue = (e.target as HTMLInputElement).value;
        if (inputValue.length < 1) inputValue = "0";
        // invalid input is taken care of automatically because of the way 'parseInt' works
        setDecimalState(parseInt(inputValue, base));
    };
    return (
        <input
            type="text"
            placeholder={label}
            value={decimalState.toString(base)}
            onInput={handleInput}
        />
    );
}
