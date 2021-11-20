
const SocialButton = (props) => {

    return (
        <div className={'col-6'} onClick={() => {
            window.open('https://discord.gg/fDr769uxnM', '_blank')
        }}>
            <img src={props.img} alt={props.title}
                 style={{maxWidth: '6vh', maxHeight: '6vh', paddingRight: '5%'}}/>
            <span style={{color: '#F1F1E6'}}>{props.title}</span>

        </div>
    )
}

//Nog een social button voor de twitter TBD

export default SocialButton