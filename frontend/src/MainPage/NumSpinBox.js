import '../assets/css/NumSpinBox.css'
const NumSpinBox = (props) => {
    return (
        <div className="btn-group btn-group-sm"
             style={{
                 // backgroundColor: '#538f8f'
             }} role="group" aria-label="Basic example">

            <button

                style={
                    {
                        borderWidth: '0 0 0 0',
                        width: '33px'
                        // backgroundColor: '#538f8f'
                }}
                onClick={props.onDecrement}
                type="button" className="btn btn-primary numspinboxbutton">
                <i
                className="bi bi-dash-lg"
                style={{
                    borderWidth: '0 0 0 0',
                }}
            />
            </button>



            <input className="w-50"
                   type="text"
                   id="fname"
                   name="fname"
                   readOnly={true}
                   onChange={(e) => {
                       const num = parseInt(e.target.value);
                       if(num && 1 <= num <= 10){
                           props.onSet(num)
                       }
                   }}
                   value={props.qty}
                   onBlur={props.onBlur}
                   style={
                       {
                           backgroundColor: '#538f8f',
                           textAlign: "center",
                           color: 'white',
                           borderColor: "#0070BA white #0070BA white",
                           boxShadow: '0 0 0 0',
                           borderWidth: '0 0 0 0'
                       }
                   }

            />
            <button type="button" className="btn btn-primary numspinboxbutton"
                    onClick={props.onIncrement}
                    style={
                        {
                          borderWidth: '0 0 0 0',
                        }
                    }

            >

                <i className="bi bi-plus-lg"/>
            </button>
        </div>
    )
}

export default NumSpinBox;