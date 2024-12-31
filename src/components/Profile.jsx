
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.init";
const Profile = () => {
    const { user, setUser, logOut, setUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false)

    const handleLogout = () => {
        logOut()
        navigate('/login')
    }
    const updateProfileHandle = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')

        setUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                handleProfileHide()
            })
            .catch(error => {
            })
    }

    const handleProfileHide = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="min-h-screen bg-[#F7F4EF] flex flex-col items-center justify-center">
            <div className="bg-[#ffffff] text-[#31302e] rounded-lg shadow-lg p-8 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img
                            src={user?.photoURL}
                            alt="profile photo"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="text-2xl font-bold mt-4">{user?.displayName}</h1>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                </div>

                <div className="mt-6 space-y-4">

                    <div className={isActive ? "" : "hidden"}>
                        <form onSubmit={updateProfileHandle} className="card-body p-0 pb-0">
                            <div className="form-control">
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-900 text-white">Update Profile</button>
                            </div>
                        </form>
                    </div>


                    <button onClick={handleProfileHide} className={`w-full py-2 bg-cyan-800 text-white rounded-lg hover:bg-cyan-900 ${isActive ? 'hidden' : ""}`}>
                        Edit Profile
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Profile;

