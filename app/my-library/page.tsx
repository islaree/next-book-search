'use client'

import Book from "@/components/my-library/book"
import { Suspense } from "react"
import { useDataContext } from "../../components/client/dataContext"
import Loading from "@/components/client/loading"


export default function LibraryPage(){
    const {data, setData} = useDataContext()

    return (
        <>
            <h1>マイライブラリ</h1>
            {data.map((id: string) => (
                <div key={id}>
                    <Suspense fallback={<Loading />}>
                    <Book id={id} />
                    </Suspense>
                </div>
            ))}
        </>
    )
}