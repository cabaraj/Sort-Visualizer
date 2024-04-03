export default function DisplayBars({ array, barColor }) {
    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" key={idx}
                    style={{
                        backgroundColor: barColor,
                        height: `${value*10}px`,
                    }}>
                </div>
            ))}
        </div>
    );
}