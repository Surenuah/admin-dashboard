import './sidebar.scss';
import {
    AttachMoney,
    BarChart, ChatBubbleOutline, DynamicFeed,
    LineStyle,
    MailOutline,
    PermIdentity, Report,
    Storefront,
    Timeline,
    TrendingUp, WorkOutline
} from "@material-ui/icons";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <li className='sidebar-list-item active'>
                            <LineStyle classname='sidebar-icon'/>
                            Home
                        </li>
                        <li className='sidebar-list-item'>
                            <Timeline classname='sidebar-icon'/>
                            Analytics
                        </li>
                        <li className='sidebar-list-item'>
                            <TrendingUp classname='sidebar-icon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <PermIdentity classname='sidebar-icon'/>
                            Users
                        </li>
                        <li className='sidebar-list-item'>
                            <Storefront classname='sidebar-icon'/>
                            Products
                        </li>
                        <li className='sidebar-list-item'>
                            <AttachMoney classname='sidebar-icon'/>
                            Transactions
                        </li>
                        <li className='sidebar-list-item'>
                            <BarChart classname='sidebar-icon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <MailOutline classname='sidebar-icon'/>
                            Mail
                        </li>
                        <li className='sidebar-list-item'>
                            <DynamicFeed classname='sidebar-icon'/>
                            Feedback
                        </li>
                        <li className='sidebar-list-item'>
                            <ChatBubbleOutline classname='sidebar-icon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebar-menu'>
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <WorkOutline classname='sidebar-icon'/>
                            Manage
                        </li>
                        <li className='sidebar-list-item'>
                            <Timeline classname='sidebar-icon'/>
                            Analytics
                        </li>
                        <li className='sidebar-list-item'>
                            <Report classname='sidebar-icon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;