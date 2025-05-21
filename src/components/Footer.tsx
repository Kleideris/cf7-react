const Footer = () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <>
            <footer className="bg-cf-grey">
                <div className="text-white text-center py-4">
                    Copyright © {currentYear}, Coding Factory
                </div>
            </footer>
        </>
    )
}

export default Footer;