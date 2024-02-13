const deleteblog = async (event) => {
    event.preventDefault();
    const blog_id = event.target.getAttribute('data-id');
    console.log(blog_id);
    const response = await fetch(`/api/blogs/${blog_id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete blog');
    }
};
document.querySelector('.delete-blog').addEventListener('click', deleteblog);
