const SectionBlock = props => {
    return(

        <div id={props.id} className={'row'} style={{marginTop: '15vh'}}>
            <div className={'col-3'}/>
            <div className={'col-md-6 col-sm-12'}>
                <h1 className={'snow-font'} style={{color: 'black'}}>{props.title}</h1>
                <h3>
                    {props.children}
                </h3>
            </div>
        </div>

                    )

}

export default SectionBlock
