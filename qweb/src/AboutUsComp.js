import './AboutUsComp.css';
import './main.css';

function AboutUsComp({photo, name, description}) {
    return (
        <div className='person'>
            <img className='member-photo' src={photo}></img>
            <h2 className='member-name'>{name}</h2>
            <p className='member-desc'>{description}</p>
        </div>

    );

}

export default AboutUsComp;