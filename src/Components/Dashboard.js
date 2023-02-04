import "./Dashboard.css";
import { Grid } from "@mui/material";

const Dashboard = ({newdata, handleOpen, setValue}) => {
    const handleClick = ( index) => {
        setValue(index);
        handleOpen();
    }
    return(
        <div className="dashboard">
            <div className="dashboard-container">
                <Grid lg={12} item container spacing={1}>
                    {newdata.map((item, index) => {
                        return <Grid key={index} item xs={6} md={4} sm={4}>
                            <div className="video-card">
                                <img onClick={() =>handleClick(index)} alt="thumbnail" src={item.thumbnailUrl} />
                            </div>
                        </Grid>
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default Dashboard;