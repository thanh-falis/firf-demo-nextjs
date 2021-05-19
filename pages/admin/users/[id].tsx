import React from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function UserPage() {
    const router = useRouter();
    console.log("router", router); // lấy id router.query.id

    // function handleOnClick() {
    //     router.push('/login');
    // }

    return(
    //     <> thẻ meta bao HTML
    //         <Head>
    //             <title>User Detail</title>
    <>
        <h1>Admin User Page {router.query.id}</h1>
        <Link href="/login">
            <a className="active">Go to Homepage by a element</a>
        </Link>
            
        
        {/* <button onClick={handleOnClick}>Go to Homepage</button> */}
    </>
                
    //        </Head>
    //    </>
        
    )
}