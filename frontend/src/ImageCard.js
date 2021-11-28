import instagram from './assets/images/instagram.png'
import facebook from './assets/images/facebook.png'
import piocomic from './assets/images/piocomic.png'

const ImageCard = (props) => {

    return (
        <div className="card">
            <img className="card-img-top"  src={props.image} alt="Card image cap"/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.secondary}</h6>
                <div className={'row'}>
                    {props.facebook &&
                    <div className={'col-4'}>
                        <a href={props.facebook} target={'_blank'}>
                            <img src={facebook} height='25'/>
                        </a>
                    </div>
                    }
                    {props.instagram &&
                    <div className={'col-4'}>
                        <a href={props.instagram} target={'_blank'}>
                            <img src={instagram} height='25'/>
                        </a>
                    </div>
                    }

                    {props.piocomic &&
                    <div className={'col-4'}>
                        <a href={props.piocomic} target={'_blank'}>
                            <img src={piocomic} height='25'/>
                        </a>
                    </div>
                    }
                    <div className={'col-4'}/>
                </div>
            </div>

        </div>
    )
}

export default ImageCard