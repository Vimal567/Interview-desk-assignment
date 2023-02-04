import "./Landingpage.css"
import Header from "./Header";
import User from "./User";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';

const style = {
    width: 100,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Landingpage = () => {
    const [data, setData] = useState();
    const [newdata, setNewData] = useState();
    const [details, setDetails] = useState();
    const [pagenumber, setPagenumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadingUser, setLoadingUser] = useState(true);
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchData = async() => {
        setLoading(true);
        setLoadingUser(true);
        const data =  await axios.get("https://jsonplaceholder.typicode.com/photos");
        const user =  await axios.get("http://jsonplaceholder.typicode.com/users/1");
        setDetails(user.data);
        setData(data.data);
        setNewData(data.data.slice(0,6));
        setLoading(false);
        setLoadingUser(false);
    }

    useEffect(()=>{
        fetchData()
    },[]);

    const scrollToEnd = () => {
        setPagenumber(pagenumber + 1);
        setNewData(data.slice(0, (pagenumber + 1) * 9));
    }

    window.onscroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight + 32)
            scrollToEnd();
    }

    return(
        <div>
            <Header />
            <User details={details} loadingUser={loadingUser} />
            {loading ? <div className="loading">
                <CircularProgress /> Loading
            </div> : 
            <Dashboard newdata={newdata} handleOpen={handleOpen} setValue={setValue} />}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div sx={style} >
                    {loading ? "" : <img className="images" alt="pic" src={data[value].url} />}
                </div>
            </Modal>
        </div>
    )
}

export default Landingpage;