const SectionBlock = props => {
    return(

        <div id={props.id} className={'row'} style={{marginTop: '2vh'}}>
            <div className={'col-3'}/>
            <div className={'col-md-6 col-sm-12'}>
                <h1 className={'snow-font'} style={{color: 'black', fontSize: '4em'}}>{props.title}</h1>
                <h3>
                    {props.children}
                </h3>
            </div>
        </div>

                    )

}

export default SectionBlock

