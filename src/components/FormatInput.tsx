import { FormEvent } from "react";
import { useConvertSetter } from "../hooks";

export default function FormatInput({
    label,
    base,
    decimalState,
    setDecimalState,
}: {
    label: string;
    base: number;
    decimalState: number;
    setDecimalState: useConvertSetter;
}) {
    return (
        <label>
            {label.substring(0, 3) + ": "}
            <input
                type="text"
                placeholder={label}
                value={decimalState.toString(base)}
                onInput={(e: FormEvent<HTMLInputElement>) =>
                    setDecimalState(e, base)
                }
            />
        </label>
    );
}
