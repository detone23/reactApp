const Navbar = () => {
    var StoreName = "Null"
    return (

        <nav className="navbar">

            <h1>{StoreName}</h1>

            <div className="links">
                <a href="/">Home</a>
                <a href="/Products" style={{
                    backgroundColor: "#f1356d",
                    color: "white",
                    borderRadius: "8px"
                }}>Products</a>
                <a href="/Users">Users</a>
            </div>

        </nav>
      );
}
 
export default Navbar;