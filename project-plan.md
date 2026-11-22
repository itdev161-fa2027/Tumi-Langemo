Final Project Plan

Milestone 1: Plan

Path: B (two Medium enhancements)

Enhancement: Markdown Support

What the user will see: When writing a post, the user can use Markdown such as headings, bold text, lists, and links, and sees a live preview under the text box. The post page shows the formatted post, and the post cards on the home page show a readable plain-text preview.
Back-end changes: none. Markdown is stored as plain text in the existing body field.
Front-end changes: Update PostDetail.jsx to render the body with the Markdown component. Update PostForm.jsx to show a preview of the body. Update PostCard.jsx so the 150-character preview has no Markdown symbols. Add CSS for headings, lists, links, and code blocks.
New packages: react-markdown, remark-gfm, remove-markdown (all in the client folder)
What I will test:

- Headings, bold, italic, and links display correctly on the post page
- Ordered and unordered lists display correctly
- Code blocks display in a monospace font
- The preview in the form matches the post page
- HTML typed into a post (such as a script tag) is shown as text and is not run
- Post cards show a readable preview with no Markdown symbols

Enhancement: Search

What the user will see: A search box on the home page finds posts by title or body. The results update after the user stops typing, a clear button shows every post again, and a message appears when no posts match.
Back-end changes: Update GET /api/posts to accept a search query parameter. It searches title and body with a case-insensitive $regex combined with $or, escapes special regular expression characters in the search text, and returns every post when the parameter is empty or missing.
Front-end changes: Update Home.jsx with a search input, a clear button, a debounce, and a no-results message. Show the loading message inside the post list so the search box stays on the page during a request. Update getPosts in api.js to send the search text.
New packages: none
What I will test:

- Results update after I stop typing, not on every key press
- Search matches post titles
- Search matches post bodies
- Search is case-insensitive
- Searching for * does not cause an error
- Searching for . shows only posts that contain a period
- The clear button shows every post again
- A message appears when no posts match

Task List

1. Create the final-project branch and push this plan - Week 1
2. Add the search parameter to GET /api/posts in server.js, with escaped regex - Week 2
3. Test the search route with different search text, including * and . - Week 2
4. Update getPosts in api.js to send the search text - Week 2
5. Add the search box, debounce, clear button, and no-results message to Home.jsx - Week 2
6. Install react-markdown and remark-gfm, and render the post body in PostDetail.jsx - Week 3
7. Add the Markdown preview to PostForm.jsx - Week 3
8. Install remove-markdown and update the preview in PostCard.jsx - Week 3
9. Add CSS for the Markdown elements and the search box - Week 3
10. Add the Milestone 2 section to this plan and push - Week 3
11. Run every check in What I Will Test, and fix anything that fails - Week 4
12. Test registering, logging in, and creating, editing, and deleting posts again - Week 4
13. Add the Final section to this plan, update the README, and record the video - Week 4
14. Merge final-project into main and submit - Week 4

Questions or Risks

- Home.jsx returns only the loading message while loading is true, so the search box would disappear on every request. I will move the loading message inside the post list and check that the box keeps focus while I type.
- I am not sure how to debounce the input. I will try setTimeout inside useEffect with a cleanup function, and test it by typing quickly and watching the network tab.
- Cutting a post at 150 characters could leave Markdown unfinished, such as half of a link. I will use remove-markdown on the body before cutting it, and test with posts that have long links and lists.
- The two enhancements both change files that the other one touches in the front end, but in different places (Home.jsx and api.js for search, and PostDetail.jsx, PostForm.jsx, and PostCard.jsx for Markdown). I will commit each one separately to keep the changes easy to find.

AI Usage

Tools: Claude
What I used them for: Drafted this plan from the assignment and the options document, and suggested which two Medium enhancements to combine.
How I checked the result: I read the plan against the Final Project Options page and changed anything that did not match my own code. I will test each feature in the browser as a logged-in user and as a visitor, and update this section as I build.
