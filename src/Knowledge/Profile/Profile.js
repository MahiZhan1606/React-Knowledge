import './Profile.css';
import { User } from './User';
// import { Welcome } from './Welcome';




//App Component = View + Logic(Declaration)
export function Profile() {
  // const names = ["Mahizhan", "Mahizhini", "Yazhan", "Rani"]

  const users =
    [
      {
        name: 'Sabari',
        pic: 'https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg'
      },
      {
        name: 'Vijay',
        pic: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
      },
      {
        name: 'Kuppu',
        pic: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg'
      }
    ]

  return (
    <div className="Profile">
      {/* <User
        name='Sabari'
        pic='https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg'
      />
      <User
        name='Vijay'
        pic='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
      />
      <User
        name='Kuppu'
        pic='https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg'
      /> */}

      {/* {names.map((nm) => (
        <Welcome name={nm} />
      ))} */}

      {users.map((usr) => (
        <User
          name={usr.name}
          pic={usr.pic}
        />
      ))}


    </div>
  );
}


