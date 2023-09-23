import logo from '../assets/navbar-logo.webp';

export default function GlobalLayout({ children }){
    return (
        <div className='h-screen w-screen bg-japanese-blue'>
            <nav className="w-full top-0 h-16 bg-clickferry flex justify-center">
                <img src={logo} alt="clickferry logo" className='h-full' />
            </nav>
            <content className='w-full flex flex-col items-center px-2 md:px-12'>
                {children}
            </content>
        </div>
    )
}