//How To Style React Compnnents With Css

//(not including external frameworks or preprocessors)

//1. EXTERNAL 
//2. MODULES
//3. INLINE

import styles from './Button.module.css'
function Button(){
    return(<button className = {styles.button}>Click me</button>);
}

export default Button;