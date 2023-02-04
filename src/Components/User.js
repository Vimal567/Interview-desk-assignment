import "./User.css";
import {Container, Row, Col, Button} from 'react-bootstrap';
import VerifiedIcon from '@mui/icons-material/Verified';
import GridOnIcon from '@mui/icons-material/GridOn';
import MovieIcon from '@mui/icons-material/Movie';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const User = ({details, loadingUser}) => {
    return(
        <>
            <div className="user">
                <Container className="user-container">
                    <Row className="row-container">
                        <Col md="4" sm="3" className="user-logo-col">
                            <div className="user-logo">
                                <img  alt="logo" src="https://techieword.com/wp-content/uploads/2019/12/WhatsApp-DP-for-Boys.jpg" />
                            </div>
                            <br />
                            {loadingUser ? "" : <div className="hidden-details">
                            <div style={{fontWeight: "500"}}>{details.name}</div>
                                    <div>
                                        <a style={{textDecoration : "none", fontSize: "0.9rem", color: "black"}} 
                                        rel="noreferrer" 
                                        target="_blank" 
                                        href={details.email}>
                                            {details.email}
                                        </a>
                                    </div>
                                    <div>
                                        <a style={{textDecoration : "none", fontSize: "0.9rem", color: "black"}} 
                                        rel="noreferrer" 
                                        target="_blank" 
                                        href={details.website}>
                                            {details.website}
                                        </a>
                                    </div>
                            </div>}
                        </Col>
                        <Col md="8" sm="9">
                            <div className="user-details-col">
                                <div>
                                    <span className="user-name">
                                        {loadingUser ? "User" : details.username}
                                        <VerifiedIcon className="verified-icon" />
                                    </span>
                                    <span className="follow-button-group">
                                        <Button className="follow-button">Follow</Button>
                                        <Button className="follow-button">Message</Button>
                                    </span>
                                </div>
                                <br />
                                <div className="followers-details-initial">
                                    <span><b>0</b> posts</span>
                                    <span className="activity-details"><b>0</b> followers</span>
                                    <span className="activity-details"><b>0</b> following</span>
                                </div>
                                <span className="follow-button-group-mobile">
                                        <Button className="follow-button">Follow</Button>
                                        <Button className="follow-button">Message</Button>
                                </span>
                                <br />
                                {loadingUser ? "" : <div className="user-intial-details">
                                    <div style={{fontWeight: "500"}}>{details.name}</div>
                                    <div>
                                    <a style={{textDecoration : "none", fontSize: "0.9rem", color: "black"}} 
                                        rel="noreferrer" 
                                        target="_blank" 
                                        href={details.email}>
                                            {details.email}
                                        </a>
                                    </div>
                                    <div>
                                    <a style={{textDecoration : "none", fontSize: "0.9rem", color: "black"}} 
                                        rel="noreferrer" 
                                        target="_blank" 
                                        href={details.website}>
                                            {details.website}
                                        </a>
                                    </div>
                                </div>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="follower-details-mobile">
                <div className="follower-details-mobile-container">
                    <span className="activity-details-mobile">
                        <span>0</span>
                        <span style={{color: "gray"}} >posts</span>
                    </span>
                    <span className="activity-details-mobile">
                        <span>0</span>
                        <span style={{color: "gray"}}>followers</span>
                    </span>
                    <span className="activity-details-mobile">
                        <span>0</span>
                        <span style={{color: "gray"}}>following</span>
                    </span>
                </div>
            </div>
            <div className="tabpanel">
                <div className="tabpanel-container">
                    <button><GridOnIcon />POSTS</button>
                    <button className="tapanel-nbuttons"><MovieIcon />REELS</button>
                    <button className="tapanel-nbuttons"><AssignmentIndIcon />TAGGED</button>
                </div>
            </div>
        </>
    )
}

export default User;