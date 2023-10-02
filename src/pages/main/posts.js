export const Post = (props) =>{
    const {post}= props;
    return (
        <div>
            <h1>{post.title}</h1>
            <h1>{post.description}</h1>
            <h1>{post.username}</h1>
        </div>
    )
}