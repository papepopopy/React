
const Controller = ({handleSetCount1}) => {
    return(
        <div className="controller btn-group">
            <button className="btn btn-danger" onClick={() => handleSetCount1(-1)}>-1</button>
            <button className="btn btn-danger" onClick={() => handleSetCount1(-10)}>-10</button>
            <button className="btn btn-danger" onClick={() => handleSetCount1(-100)}>-100</button>
            <button className="btn btn-danger" onClick={() => handleSetCount1(100)}>+100</button>
            <button className="btn btn-primary" onClick={() => handleSetCount1(10)}>+10</button>
            <button className="btn btn-danger" onClick={() => handleSetCount1(1)}>+1</button>
        </div>
    )
}
export default Controller 