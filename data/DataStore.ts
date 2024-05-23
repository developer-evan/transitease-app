export interface User {
  id: number;
  username: string;
  displayName: string;
  avatarUrl: string;
  followersCount: number;
  followingCount: number;
}

export interface Media {
  type: "image" | "video";
  url: string;
}

export interface TwitterPost {
  id: number;
  user: User;
  content: string;
  timestamp: string; // Assuming ISO 8601 format
  likes: number;
  retweets: number;
  replies: number;
  media?: Media[]; // Media is an optional array
}
export const twitterPosts: TwitterPost[] = [
  {
    id: 1,
    user: {
      id: 123,
      username: "user123",
      displayName: "User 123",
      avatarUrl:
        "https://images.unsplash.com/photo-1709056842187-a7c66a8647c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fHw%3D",
      followersCount: 1000,
      followingCount: 500,
    },
    content: "This is a sample tweet. #example #twitter",
    timestamp: "2024-02-25T12:30:00Z",
    likes: 20,
    retweets: 10,
    replies: 5,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1707343848655-a196bfe88861?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 456,
      username: "user456",
      displayName: "User 456",
      avatarUrl:
        "https://plus.unsplash.com/premium_photo-1706727291378-ae48117af40d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D",
      followersCount: 500,
      followingCount: 200,
    },
    content: "Check out this cool article! #article #news",
    timestamp: "2024-02-25T13:45:00Z",
    likes: 15,
    retweets: 5,
    replies: 2,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1709423377982-fbe2169e5b67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  // Add more posts as needed
  {
    id: 3,
    user: {
      id: 789,
      username: "user789",
      displayName: "User 789",
      avatarUrl:
        "https://plus.unsplash.com/premium_photo-1708274146108-db9aff3cb6ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D",
      followersCount: 2000,
      followingCount: 1500,
    },
    content: "Just posted a new blog article! Check it out. #blog #writing",
    timestamp: "2024-02-25T15:20:00Z",
    likes: 30,
    retweets: 8,
    replies: 3,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1709136333082-f3ce4ad278a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      },
    ],
  },
  // Add more posts as needed
];
