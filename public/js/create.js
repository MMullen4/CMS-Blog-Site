const addblog = async () => {
    const title = document.getElementById('blogtitle').value;
    const content = document.getElementById('blogcontent').value;
    const blog = {
        title,
        content
    }
    const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
    if (response.ok) {
        document.location.replace('/dashboard')
    }
}

document.getElementById("createblog").addEventListener("click", addblog);