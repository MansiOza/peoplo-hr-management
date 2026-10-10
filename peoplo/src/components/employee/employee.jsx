import PageHeader from "../pageHeader/pageHeader";
import "./employee.scss";

function Employee() {
    return(
        <div className="employee">
            <PageHeader
                header="Employees"
                subHeader="1,284 people across 6 departments and 3 offices"
            />
        </div>
    )
}

export default Employee;