const editblog = async (event) => {
    event.preventDefault();
    const title = document.getElementById('blogtitle').value.trim();
    const content = document.getElementById('blogcontent').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('editblog').addEventListener('submit', editblog);

