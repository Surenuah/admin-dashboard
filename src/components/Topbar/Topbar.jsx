import {Language, NotificationsNone, Settings} from "@material-ui/icons";
import './topbar.scss';

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbar-wrapper'>
                <div className='top-left'>
                    <span className='logo'>surenuahadmin</span>
                </div>
                <div className='top-right'>
                    <div className='topbar-icon-container'>
                        <NotificationsNone />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className='topbar-icon-container'>
                        <Language />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className='topbar-icon-container'>
                        <Settings />
                    </div>
                    <img src="https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png"
                         className='top-avatar'
                         alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Topbar;