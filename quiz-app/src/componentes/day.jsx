import './css/day.css'

const day = () => {
  return (
    <div className="day">
        <div className="week">
        <h5>Seg</h5>
          <h5>Ter</h5>
          <h5>Qua</h5>
          <h5>Qui</h5>
          <h5>Sex</h5>
          <h5>Sab</h5>
          <h5>dom</h5>
        </div>
        <div className="days span">
            <div className="void">
                <div className="content">
                    <h4>1</h4>
                    <h4>2</h4>
                    <h4>3</h4>
                    <h4>4</h4>
                    <h4>5</h4>
                    <h4>6</h4>
                    <h4>7</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default day