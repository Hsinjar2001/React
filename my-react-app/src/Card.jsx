import profilepic from'./assets/instragram.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="Profile Picture"/>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make youtube videos and play video games</p>
        </div>
    );
}
export default Card;