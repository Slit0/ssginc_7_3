import { Link, Outlet, useNavigation } from "react-router-dom";
import MenuNavigation from "../components/MenuNavigation";
function RootLayout(){

    const navigation = useNavigation();

    return(
        <>
       <MenuNavigation />
    <hr/>
        <div id="detail">
         {navigation === 'loading' && <p>열심히 로딩중입니다.....</p> }
            <Outlet />
        </div>
        </>
    )
}
export default RootLayout;