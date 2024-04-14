export default function DisplayBars({ array, barColor, noOfBars }) {
    const maxValue = Math.max(...array);
    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" key={idx}
                    style={{
                        backgroundColor: barColor,
                        height: `${value/maxValue*100}%`,
                        width: `${100/noOfBars}%`,
                    }}>
                </div>
            ))}
        </div>
    );
}