const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>Components</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/Create" style= {{
                    color: "white", 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default NavBar;