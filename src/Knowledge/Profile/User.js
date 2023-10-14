import './Profile.css';

export function User({ name, pic }) {

    return (
        <div>
            <img className='user-profile-pic'
                src={pic}
                alt={name} />
            <h1 className='user-name'>
                Hello <span className='user-first-name'>{name}</span> 🎉🎉
            </h1>
        </div>
    );
}

// function User(props) {
// console.log(props, typeof props)
//   return (
//     <div>
//       <img className='user-profile-pic'
//         src={props.pic}
//         alt={props.name}
//       />
//       <h1 className='user-name'>
//         Hello <span className='user-first-name'>{props.name}</span> 🎉🎉
//       </h1>
//     </div>
//   )}


//   console.log(props, typeof props)
//   const { name, pic } = props; // Object destructuring (ES6)
//   return (
//     <div>
//       <img className='user-profile-pic'
//         src={pic}
//         alt={name}
//       />
//       <h1 className='user-name'>
//         Hello <span className='user-first-name'>{name}</span> 🎉🎉
//       </h1>
//     </div>
//   )}
