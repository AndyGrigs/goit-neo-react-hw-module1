import userData from './userData.json';
import friends from './friends.json';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import './App.css';

function App() {
    return (
        <>
            <section>
                <Profile
                    name={userData.username}
                    tag={userData.tag}
                    location={userData.location}
                    image={userData.avatar}
                    stats={userData.stats}
                />
            </section>

            <section>
                <FriendList friends={friends} />
            </section>
        </>
    );
}

export default App;
