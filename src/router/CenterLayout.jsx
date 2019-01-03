import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import DocumentTitle from "react-document-title"

class CenterLayout extends Component {
    render() {
        const {children, title} = this.props;
        return (
            <DocumentTitle title={title}>
                <React.Fragment>
                    {children}
                </React.Fragment>
            </DocumentTitle>
        )
    }
}

const BaseLayout = withRouter(CenterLayout);
export default BaseLayout