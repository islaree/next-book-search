export default function SearchingWord({keyword}: {keyword: string}){
    return (
        <>
            {keyword.length > 0 && (
                <div className='flex items-center py-1 border-b border-gray-200 px-6 text-sm text-gray-500'>
                    <div className="shrink-0 max-w-[calc(100%-80px)] whitespace-nowrap overflow-clip">{keyword}</div>
                    <div className='ml-1 shrink-0'>の検索結果</div>
                </div> 
            )}
        </>
    )
}