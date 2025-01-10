import AuthHooks from "../../Authentication/Provaider/AuthHooks";

const UserHome = () => {
    const { user } = AuthHooks()

    return (
        <div>
            <h3 className="text-4xl">Hi, Welcome Back!</h3>

            {
                user?.displayName ? user?.displayName : 'Back'
            }
        </div>
    );
};

export default UserHome;