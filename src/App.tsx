import { useState } from "react";
import FormatInput from "./components/FormatInput";

function App() {
    const [decimalState, setDecimalState] = useState(0);
    return (
        <>
            <FormatInput
                decimalState={decimalState}
                setDecimalState={setDecimalState}
                label="decimal"
                base={10}
            />
            <FormatInput
                decimalState={decimalState}
                setDecimalState={setDecimalState}
                label="binary"
                base={2}
            />
            <FormatInput
                decimalState={decimalState}
                setDecimalState={setDecimalState}
                label="octal"
                base={8}
            />
            <FormatInput
                decimalState={decimalState}
                setDecimalState={setDecimalState}
                label="hexadecimal"
                base={16}
            />
        </>
    );
}

export default App;
