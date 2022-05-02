import { Dispatch, FormEvent, SetStateAction, useState } from "react";

export type useConvertSetter = (
    e: FormEvent<HTMLInputElement>,
    base: number
) => void;

export const useConvert = () => {
    const [state, setState]: [number, Dispatch<SetStateAction<number>>] =
        useState<number>(0);
    const setter = (e: FormEvent<HTMLInputElement>, base: number) => {
        let inputValue = (e.target as HTMLInputElement).value;
        if (inputValue.length < 1) inputValue = "0";
        // invalid input is taken care of automatically because of the way 'parseInt' works
        setState(parseInt(inputValue, base));
    };
    const toReturn: [number, useConvertSetter] = [state, setter];
    return toReturn;
};
