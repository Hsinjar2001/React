//How To Style React Compnnents With Css

//(not including external frameworks or preprocessors)

//1. EXTERNAL 
//2. MODULES
//3. INLINE

function Button(){

    const styles = {
  backgroundColor:"blue",
  color: "white",
   padding: "10px 20px",
  borderRadius:"10px",
  border: "none",
  cursor: "pointer",
    }

    return(<button style={styles}>Click me</button>);
}

export default Button