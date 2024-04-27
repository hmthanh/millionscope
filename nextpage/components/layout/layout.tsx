import MyBlog from "../blog";
import MyFooter from "../myfooter";
import MyHeader from "../myheader";


export default function Layout({ children }: any) {
    return (
        <>
            <MyHeader></MyHeader>
            {/* <BodyBlog>{children}</BodyBlog> */}
            <MyBlog>{children}</MyBlog>
            <MyFooter></MyFooter>
        </>
    )
}