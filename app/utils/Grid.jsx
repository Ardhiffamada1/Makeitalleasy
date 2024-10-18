

export default function GridLayouting () {
    return(
    <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
            <div className="h-20 w-40 rounded-md bg-gray-200"></div>
            <div className="h-20 w-40 rounded-md bg-gray-200"></div>
            <div className="h-20 w-40 rounded-md bg-gray-200"></div>
        </div>
    </div>
    )
}