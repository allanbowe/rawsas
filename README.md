## 🚀 Quick start

1.  **checkout raw sas repository (Gatsby site) and start developing**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd rawsas/
    npm install
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## 🧐 How to update blog?

Create/update blog markdown file in `posts` folder.

A quick look at the blogs markdown file and images folder.

    .
    └── contents
            ├── images
            ├── posts
            └── resources

1.  **`/contents`**: This directory contains all of posts' markdown files as well as images and other attachments.

2.  **`/contents/images`**: This directory will contain all of the image files and link in markdown file can be `../images/<filename>`.

3.  **`/contents/posts`**: This directory will contain all of the markdown files and front-matter should have `title`, `date`, `path` and `tags`(may have it empty).

4.  **`/contents/resources`**: This directory will contain all of the attachments(pdf) and link in markdown file can be `../resources/<filename>`.

## 🎓 Publish Blog

After making markdown file changes/creating new ones, make commit and push to master branch, Github Action will re-publish Github Pages.
