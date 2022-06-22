import { Navigate } from "react-router-dom";

export default function Protected(props:any) {
    const { isLoggedIn, children } = props;
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    
    return children;
}
