import "./pageHeader.scss";

function PageHeader({ header, subHeader }) {
    return(
        <div className="page-header">
            <div className="title">
                <h2>{header}</h2>
                <p>{subHeader}</p>
            </div>
        </div>
    )
}

export default PageHeader;