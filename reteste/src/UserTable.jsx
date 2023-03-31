function UserTable() {
    

    // BEHAVIOUR
    const handleDelete = () => {
        
    }

    // RENDER
    return <>
                <div class="row">
                    <div class="col bg-secondary text-light">
                        <p>name</p>
                    </div>
                    <div class="col bg-secondary text-light">
                        <p>username</p>
                    </div>
                    <div class="col bg-secondary text-light">
                        <button>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </div>
    </>
}

export default UserTable