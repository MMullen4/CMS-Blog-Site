const addCommnents = async () => {
    const comment_text = document.getElementById("userinput").value;
    const blog_id = document.getElementById("commentbtn").dataset.blogid; // accesses data- id in blog handlebars
    try {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment_text, blog_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            document.location.reload();
        }
    } catch (error) {
        console.error(error)
    }
}
document.getElementById("commentbtn").addEventListener("click", addCommnents);
