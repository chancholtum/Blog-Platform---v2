import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [
    {
      title: "What's wrong with Man Utd and how to fix it",
      views: 3242,
      categories: ["Man United"],
      author: "Chanchol Mukdatanachot",
      textInPost:
        "Alex Keble analyses Manchester United's    difficult start to the season, with problems in both defence and attack, that has left them languishing in mid-table in the Premier League. Manchester United Manchester United have officially made their worst-ever start to a Premier League season.",
      comment: [
        {
          photo:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/71A7/production/_129859092_gettyimages-1491790903.jpg",
          commentText: "Save me!!",
          commentName: "Erik Ten Hag",
          commentId: crypto.randomUUID(),
        },
        {
          photo:
            "https://images.teamtalk.com/content/uploads/2022/09/22210708/man-utd-centre-back-harry-maguire.jpg",
          commentText: "I can help you guys 😘",
          commentName: "Harry Maguire",
          commentId: crypto.randomUUID(),
        },
      ],
      id: "1",
      image:
        "https://resources.premierleague.com/photos/2023/10/03/ccb6663d-0d75-4376-a15b-40b233ad2361/Rashford-Hojlund-FPL.jpg?width=451&height=268",
    },
    {
      title: "PGMOL release VAR audio",
      views: 1543,
      categories: ["Liverpool"],
      author: "Chanchol Mukdatanachot",
      textInPost:
        "PGMOL, the referees organisation, have acknowledged that the Video Assistant Referee in Tottenham Hotspur's 2-1 win over Liverpool made a 'significant error' in not overturning a decision that awarded Luis Diaz as offside after scoring in the first half of the match ",
      comment: [
        {
          photo:
            "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AAAC/production/_131329634_jurgen_klopp_epa.jpg",
          commentText: "Well done boys, good process",
          commentName: "Jurgen Klopp",
          commentId: crypto.randomUUID(),
        },
        {
          photo:
            "https://images.teamtalk.com/content/uploads/2022/09/22210708/man-utd-centre-back-harry-maguire.jpg",
          commentText: "@Jurgen Klopp I can help you too , Klopp",
          commentName: "Harry Maguire",
          commentId: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
      image:
        "https://resources.premierleague.com/photos/2023/10/03/1e57bbb7-5b4a-4dbc-a9a2-13b091ba2563/Luis-Diaz-reacts-to-being-called-offside-after-scoring-v-Spurs.jpg?width=451&height=268",
    },
    {
      title: "Saka injured in Arsenal defeat",
      views: 6954,
      categories: ["Arsenal", "Man United"],
      author: "Chanchol Mukdatanachot",
      textInPost:
        "Arsenal and Manchester United both suffered defeat in the UEFA Champions League group stage on Tuesday, with the Gunners losing 2-1 to Lens in France while the Red Devils were beaten 3-2 at home by Galatasaray.",
      comment: [
        {
          photo: "https://f.ptcdn.info/297/065/000/pvkfyh3ybke5ysHiY32-o.jpg",
          commentText: "Oh Yeahh, It's my time ",
          commentName: "Nicolas Pépé",
          commentId: crypto.randomUUID(),
        },
        {
          photo:
            "https://images.teamtalk.com/content/uploads/2022/09/22210708/man-utd-centre-back-harry-maguire.jpg",
          commentText: "I can play a winger for Arsenal fan",
          commentName: "Harry Maguire",
          commentId: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
      image:
        "https://resources.premierleague.com/photos/2023/10/03/82af2ed1-2f93-4082-816b-1fe1d65c75bd/Bukayo-Saka-Arsenal.jpg?width=451&height=268",
    },
    {
      title: "When should managers take armband off Haaland?",
      views: 1496,
      categories: ["Man City"],
      author: "Chanchol Mukdatanachot",
      textInPost:
        "Erling Haaland’s (£14.1m) role as the go-to captain for millions of managers each Gameweek in Fantasy Premier League is about to come under threat",
      comment: [
        {
          photo:
            "https://images.teamtalk.com/content/uploads/2022/09/22210708/man-utd-centre-back-harry-maguire.jpg",
          commentText:
            "I also picked you in my Fantasy Team, Please get more goal",
          commentName: "Harry Maguire",
          commentId: crypto.randomUUID(),
        },
        {
          photo:
            "https://cdn.theathletic.com/app/uploads/2022/09/07021831/ERLING-HAALAND-MANCHESTER-CITY-scaled-e1662531544452.jpg",
          commentText: "Did you picked yourself in your team bro?",
          commentName: "Erling Braut Haaland",
          commentId: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
      image:
        "https://resources.premierleague.com/photos/2023/10/04/32aae4a0-068c-4991-a375-d30bad909da9/GettyImages-1625880137.jpg?width=451&height=268",
    },
    {
      title: "Maddison genius helps Spurs unpick Liverpool lock",
      views: 2045,
      categories: ["Spurs", "Liverpool"],
      author: "Chanchol Mukdatanachot",
      textInPost:
        "Joel Matip crumples to the turf, the Tottenham Hotspur stadium erupts, and one of the most absorbing and surreal Premier League matches of recent times has an ending that’s in keeping with the preceding 90 minutes of carnage",
      comment: [
        {
          photo:
            "https://img.a.transfermarkt.technology/portrait/big/480692-1665556242.jpg?lm=1",
          commentText: "Where is my goal ??",
          commentName: "Luis Diaz",
          commentId: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
      image:
        "https://resources.premierleague.com/photos/2023/09/30/7a13dead-0026-4ae3-bc6b-f5400092b5dd/2023-09-30T184355Z_1323134143_UP1EJ9U1G1431_RTRMADP_3_SOCCER-ENGLAND-TOT-LIV-REPORT.JPG?width=451&height=268",
    },
    {
      title: "Mudryk's first Chelsea goal helps secure derby win at Fulham",
      views: 3484,
      categories: ["Chelsea"],
      author: "Chanchol Mukdatanachot",
      textInPost:
        "Mykhailo Mudryk's first goal for Chelsea and an Armando Broja strike in the space of 82 seconds helped secure a 2-0 victory at Fulham for the Blues' first away win of the season, moving them above their west London rivals",
      comment: [
        {
          photo:
            "https://static.standard.co.uk/2023/04/19/14/newFile.jpg?width=1200&height=1200&fit=crop",
          commentText: "Easy bro!!",
          commentName: "Mykhaylo Mudryk",
          commentId: crypto.randomUUID(),
        },
        {
          photo:
            "https://static.standard.co.uk/2023/06/16/08/newFile-1.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
          commentText:
            "@Mykhaylo Mudryk I waited for your first goal almost year WTF!!",
          commentName: "Enzo Fernández",
          commentId: crypto.randomUUID(),
        },
      ],
      id: crypto.randomUUID(),
      image:
        "https://resources.premierleague.com/photos/2023/10/02/e0bd34d6-b76c-49b5-9d7a-97474b29bab4/Mudryk-Chelsea.jpg?width=451&height=268",
    },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addComment: {
      prepare(id, newComment) {
        return {
          payload: { id, newComment },
        };
      },
      reducer(state, action) {
        const currentPost = state.post.find(
          (singlePost) => singlePost.id === action.payload.id,
        );

        currentPost.comment.push(action.payload.newComment);
      },
    },
    deleteComment: {
      prepare(id, commentId) {
        return {
          payload: { id, commentId },
        };
      },
      reducer(state, action) {
        const currentPost = state.post.find(
          (singlePost) => singlePost.id === action.payload.id,
        );

        currentPost.comment = currentPost.comment.filter(
          (comment) => comment.commentId !== action.payload.commentId,
        );
      },
    },
    editComment: {
      prepare(id, commentId, commentEdit) {
        return {
          payload: { id, commentId, commentEdit },
        };
      },
      reducer(state, action) {
        const currentPost = state.post.find(
          (singlePost) => singlePost.id === action.payload.id,
        );

        const currentComment = currentPost.comment.find(
          (comment) => comment.commentId === action.payload.commentId,
        );

        const { commentText } = action.payload.commentEdit;
        if (currentComment) {
          currentComment.commentText = commentText;
        }
      },
    },
    addPost(state, action) {
      state.post.push(action.payload);
    },
    deletePost(state, action) {
      state.post = state.post.filter((post) => post.id !== action.payload);
    },
    editPost(state, action) {
      const { title, categories, textInPost, id } = action.payload;

      const currentPost = state.post.find((post) => post.id === id);

      if (currentPost) {
        currentPost.title = title;
        currentPost.categories = categories;
        currentPost.textInPost = textInPost;
      }
    },
  },
});

export const {
  addComment,
  deleteComment,
  editComment,
  addPost,
  deletePost,
  editPost,
} = postSlice.actions;
export default postSlice.reducer;
export const getPosts = (state) => state.post.post;
export const ascendingPosts = (state) =>
  state.post.post.slice().sort((a, b) => {
    return b.views - a.views;
  });
export const decendingPosts = (state) =>
  state.post.post.slice().sort((a, b) => {
    return a.views - b.views;
  });
