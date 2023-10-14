export function Welcome({ name }) {
    return (
        <div>
            <h1 className='user-name'>
                Hello, <span className='user-first-name'>{name}</span>
            </h1>
        </div>
    );
}
