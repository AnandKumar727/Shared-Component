import 'remixicon/fonts/remixicon.css'
const ButtonModel = {
    primary: 'bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-semibold',
    secondary: 'bg-indigo-500 hover:bg-indigo-600 py-2 px-6 rounded text-white font-semibold',
    danger: 'bg-rose-500 hover:bg-rose-600 py-2 px-6 rounded text-white font-semibold',
    warning: 'bg-amber-500 hover:bg-amber-600 py-2 px-6 rounded text-white font-semibold',
    info: 'bg-cyan-500 hover:bg-cyan-600 py-2 px-6 rounded text-white font-semibold',
    dark: 'bg-slate-500 hover:bg-slate-600 py-2 px-6 rounded text-white font-semibold',
    success: 'bg-green-500 hover:bg-green-600 py-2 px-6 rounded text-white font-semibold',
    
}
const Button = ({children='Button', type = 'dark', icon})=>{
    
    return(
        <div>
            <button className={ButtonModel[type]}>
                {
                    icon && <i className = {`ri-${icon} mr-2`}></i>
                }
                {children}
                </button>
        </div>
    )
}
export default Button