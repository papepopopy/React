
const Controller = ({handleSetCount1}) => {
    return(
        <div className="controller">
            <button onClick={() => handleSetCount1(-1)}>-1</button>
            <button onClick={() => handleSetCount1(-10)}>-10</button>
            <button onClick={() => handleSetCount1(-100)}>-100</button>
            <button onClick={() => handleSetCount1(100)}>+100</button>
            <button onClick={() => handleSetCount1(10)}>+10</button>
            <button onClick={() => handleSetCount1(1)}>+1</button>
        </div>
    )
}
export default Controller