import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as paperActions from "../redux/actions/index"


export default connect(
    state=>state,
    dispatch=>bindActionCreators(paperActions,dispatch)
)


