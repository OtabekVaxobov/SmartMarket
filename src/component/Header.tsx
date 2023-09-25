export default function Header() {

    return (
        <>
            <div className="bg-yellow-600 py-4">
                <div className="container mx-auto">
                    <div className="flex flex-row">

                        <a href='/'>
                            <div className="px-4">
                                <p className="text-white capitalize">Hoome</p>
                            </div>
                        </a>
                        <a href='about'>
                            <div className="px-4">
                                <p className="text-white capitalize">About</p>
                            </div>
                        </a>
                        <a href='contact' >
                            <div className="px-4">
                                <p className="text-white capitalize">Contacts</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}