import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Profile({ fullName, bio, imgSrc, profession }) {
    return (
        < Card style={{ width: '18rem' }
        }>
            <Card.Img variant="top" style={{ width: '286px', height: '380px' }} src={imgSrc} />
            <Card.Body>
                <Card.Title style={{ fontSize: 25 }}>{fullName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ fontSize: 20 }}>{bio}</ListGroup.Item>
                <ListGroup.Item>{profession}</ListGroup.Item>
            </ListGroup>
        </Card >

    );
}
export default Profile;