const user = "Mahdy"

var users = [
    { firstName: "Mahdy" },
    { firstName: "Hussein" },
    { firstName: "Ali" }
]

function Hello() {
    return (
        <div>
            <h1>
                {user ? "Hello dear user" : "Hello World!!"}
            </h1>

            {user ? <h1>Your name is {user}</h1> : <h1>You are anonymous!!</h1>}

            <h1> All user(s) list:</h1>

            {users.map(user => (<h1>{user.firstName}</h1>))}

        </div>
    )
}

export default Hello;
