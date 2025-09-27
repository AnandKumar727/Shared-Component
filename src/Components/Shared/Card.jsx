const Card = ({title ='Card Title', children='Your Content', footer})=>{
    return(
        <div className="shadow-lg p-8 rounded-lg border border-gray-100 space-y-2">
            <h1 className="text-xl font-bold capitalize">{title}</h1>

            <div className="text-gray-500 font-semibold mt-2">
                {children}
            </div>

            {
            footer && 
            <div className="mt-2">
            {footer}
            </div>
            }
            
        </div>
    )
}
export default Card