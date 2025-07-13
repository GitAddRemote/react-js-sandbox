import { useEffect, useState } from "react";

export function Alert({ message }) {

    const [alertDone, setAlertDone] = useState(false);
    let timer;

    useEffect(() => {
        console.log("Starting Alert Timer!");
        timer = setTimeout(function () {
            console.log("Timer Expired!");
            setAlertDone(true);
        }, 2000);
        
        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <>
            {!alertDone && <p>Relax, you've still some time left!</p>}
            {alertDone && <p>Time's up!</p>}
        </>
    );
}
