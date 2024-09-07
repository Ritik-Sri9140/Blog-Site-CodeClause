document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles');


    articlesContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const title = e.target.closest('article').querySelector('h2').innerText;
            addComment(title);
        }
    });

    window.addComment = (title) => {
        const article = articles.find(a => a.title === title);
        if (!article) return;

        const articleElement = Array.from(articlesContainer.children)
            .find(a => a.querySelector('h2').innerText === title);
        const commentTextArea = articleElement.querySelector('textarea');
        const commentsList = articleElement.querySelector('.comments-list');

        const comment = commentTextArea.value.trim();
        if (comment) {
            article.comments.push(comment);
            commentsList.innerHTML = article.comments.map(c => `<p>${c}</p>`).join('');
            commentTextArea.value = '';
        } else {
            alert('Comment cannot be empty.');
        }
    };

});
