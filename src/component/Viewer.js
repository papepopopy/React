
const Viewer = ({count1}) => {
    return (
        <div className="counter">
            <h1>현재 카운터 :</h1>
            <hr />
            <h1>{count1}</h1>
        </div>
    )
}

export default Viewer;