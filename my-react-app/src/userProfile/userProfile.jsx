import './userProfile.css'

export default function UserProfile(props) {
    const {user} = props;

    return (
        <>
            <div className="user">
                <img className='user__img' src={user.avatarUrl} alt="фото пользователя" />
                <div className='user__decription'>
                    <p>Имя пользователя: {user.name}</p>
                    <p>E-mail: {user.email}</p>
                    <p>Описание: {user.bio}</p>
                </div>
            </div>
            
        </>
    )
}