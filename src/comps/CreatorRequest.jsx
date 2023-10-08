import './CreatorRequest.css';

export function CreatorRequest(props) {
    return (
        <div className="cr">
            <div className="fcol">
                <h1>{props.name}</h1>
            </div>
            <div className="buttons">
                <button>Approve</button>
                <button>Decline</button>
            </div>
        </div>
    );
};