// HOOKS 

// Use State [ Log, Inc, Dec, Limit, Text Hide and Show, Password Hide and Show, Theme Toggle ]

// Use State 

// import React from 'react'

// const Day4_State1 = () => {

//     var count = 1

//     const fun = () => {
//         count = count + 1;
//         console.log(count)
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day4_State1

// Syntax

// variable_type [ variable_name, function_name ] = useState(value)

// Increment 

// import React, { useState } from 'react'

// const Day4_State1 = () => {

//     var [ count, setCount ] = useState(1)

//     const fun = () => {
//         setCount(++count)
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day4_State1

// Decrement

// import React, { useState } from 'react'

// const Day4_State1 = () => {

//     var [ count, setCount ] = useState(1)

//     const fun = () => {
//         setCount(--count)
//     }

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={fun}>Click</button>
//         </>
//     )
// }

// export default Day4_State1

// Increment & Decrement

// import React, { useState } from 'react'

// const Day4_State1 = () => {

//     var [ count, setCount ] = useState(1)

//     const addFun = () => {
//         setCount(++count)
//     }

//     const removeFun = () => {
//         setCount(--count)
//     }

//     return (
//         <>
//             <button onClick={addFun}>Add</button>
//             <h1>{count}</h1>
//             <button onClick={removeFun}>Remove</button>
//         </>
//     )
// }

// export default Day4_State1

// TASK -> Increment Decrement with Limit ( 0 to 10 )

// import React, { useState } from 'react'

// const Day4_State1 = () => {

//     var [ count, setCount ] = useState(0)

//     const addFun = () => {
//         if(count < 10 ){
//             setCount(++count)
//         }
//     }

//     const removeFun = () => {
//         if(count > 0){
//             setCount(--count)
//         }
//     }

//     return (
//         <>
//             <button onClick={addFun}>Add</button>
//             <h1>{count}</h1>
//             <button onClick={removeFun}>Remove</button>
//         </>
//     )
// }

// export default Day4_State1

// Text Hide & Show

// import React, { useState } from 'react'

// const Day4_State1 = () => {

//     var [ show, setShow ] = useState(true)

//     const showFun = () => {
//         setShow(!show)
//     }

//     return (
//         <>
//             <button onClick={showFun}>{ show ? 'Hide' : 'Show'}</button>
//             <p> 
//                 { show 
//                 ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo dicta odit vero mollitia ullam eaque sit laboriosam illum beatae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sint deserunt porro odio ipsa quibusdam, aspernatur similique reprehenderit atque rem tempore molestias nihil maxime soluta! Recusandae alias porro itaque saepe' 
//                 : '' 
//                 } 
//             </p>
//         </>
//     )
// }

// export default Day4_State1

// Password 

// import React, { useState } from 'react'

// const Day4_State1 = () => {

//     var [ password, setPassword ] = useState(false)

//     const passwordFun = () => {
//         setPassword(!password)
//     }

//     return (
//         <>
//             <input type={ password ? 'text' : 'password' } />
//             <button onClick={passwordFun}>{ password ? 'Hide' : 'Show' }</button>
//         </>
//     )
// }

// export default Day4_State1

// Theme Toggle

// import React, { useState } from 'react'

// const Day5_State2 = () => {

//     const [ theme, setTheme ] = useState(true)

//     const themeStyle = {
//         backgroundColor :  theme ? 'black' : 'white',
//         color : theme ? 'white' : 'black',
//         padding : '40px'
//     }

//     const themeToggle = () => {
//         setTheme(!theme)
//     }

//     return (
//         <>
//             <p style={themeStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea expedita porro eos nam soluta perspiciatis, quas veritatis excepturi impedit dicta blanditiis saepe doloribus eligendi, eveniet illum distinctio deserunt velit. Maiores, culpa quaerat deserunt voluptatum necessitatibus repellat eligendi suscipit, aspernatur eum assumenda voluptatem laborum? Assumenda sequi repellat maiores in temporibus?</p>
//             <button onClick={themeToggle}>{ theme ? 'Light Theme' : 'Dark Theme' }</button>
//         </>
//     )
// }

// export default Day5_State2