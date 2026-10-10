import PageHeader from "../pageHeader/pageHeader";
import "./dashboard.scss"
function Dashboard(){
    return(
        <div className="dashboard">
            <PageHeader
                header="Dashboard"
                subHeader="Friday, 25 September · 1,124 people checked in · 8 requests waiting"
            />
        </div>
    )
}

export default Dashboard;