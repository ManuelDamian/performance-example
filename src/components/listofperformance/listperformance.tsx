import "./listperformance.css";

const listper = () => {
    return (
        <ul>
            <li className="Reaction">
                <div className="rayoiconconteiner">
                    <img className="rayoicon" src="src/assets/rayo.svg"/>
                    Reaction
                </div>
                <div className="calification-container">
                    <p className="valorcambiante"> 80</p><p className="valorneutro"> / 100</p>
                </div>
            </li>
            <li className="Memory">
                <div className="brainiconcontainer">
                    <img className="brainicon" src="src/assets/brain.svg"/>Memory
                </div>
                <div className="calification-container">
                    <p className="valorcambiante"> 92</p><p className="valorneutro"> / 100</p>
                </div>
            </li>
            <li className="Verbal">
                <div className="chaticoncontainer">
                    <img className="chaticon" src="src/assets/chat.svg"/>Verbal
                </div>
                <div className="calification-container">
                    <p className="valorcambiante"> 61</p><p className="valorneutro"> / 100</p>
                </div>
            </li>
            <li className="Visual">
                <div className="eyeiconcontainer">
                    <img className="eyeicon" src="src/assets/eye.svg"/>Visual
                </div>
                <div className="calification-container">
                <p className="valorcambiante"> 73</p><p className="valorneutro"> / 100</p>
                </div></li>
        </ul>
    )
}
export default listper